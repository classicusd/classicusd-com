import Link from 'next/link';
import { USC_CONTRACT, CHAINS } from '@/lib/constants';

export const metadata = {
  title: 'Code Examples',
  description: 'Code examples for integrating with Classic USD ($USC).',
};

export default function ExamplesPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-usc-text mb-6">
        Code Examples
      </h1>

      <p className="text-usc-text-secondary text-lg mb-8">
        Example code for interacting with Classic USD using popular libraries. These snippets
        show common operations like reading balances and transferring tokens.
      </p>

      <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 mb-8">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="text-yellow-400 text-sm">
              <strong>Note:</strong> Replace placeholder addresses with actual contract addresses from
              the <Link href="/docs/token/contracts" className="underline">contracts page</Link> before
              using in production.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Using viem (Recommended)</h2>

      <p className="text-usc-text-secondary mb-4">
        <a href="https://viem.sh" target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">viem</a> is
        a modern TypeScript library for Ethereum interactions.
      </p>

      <div className="mb-6">
        <p className="text-usc-text-muted text-xs mb-2">Install viem</p>
        <pre className="p-4 rounded-lg bg-usc-surface border border-usc-border overflow-x-auto text-sm">
          <code className="text-usc-text">npm install viem</code>
        </pre>
      </div>

      <div className="mb-6">
        <p className="text-usc-text-muted text-xs mb-2">Read $USC Balance</p>
        <pre className="p-4 rounded-lg bg-usc-surface border border-usc-border overflow-x-auto text-sm">
          <code className="text-usc-text">{`import { createPublicClient, http, parseAbi } from 'viem'
import { etc } from 'viem/chains'

const USC_ADDRESS = '${USC_CONTRACT.etc}' // Replace with actual address

const client = createPublicClient({
  chain: etc,
  transport: http('${CHAINS.etc.rpc}'),
})

const erc20Abi = parseAbi([
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
])

async function getUSCBalance(address: string) {
  const balance = await client.readContract({
    address: USC_ADDRESS,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address],
  })

  // USC has 6 decimals
  return Number(balance) / 1e6
}

// Usage
const balance = await getUSCBalance('0xYourAddress')
console.log(\`Balance: \${balance} USC\`)`}</code>
        </pre>
      </div>

      <div className="mb-6">
        <p className="text-usc-text-muted text-xs mb-2">Transfer $USC</p>
        <pre className="p-4 rounded-lg bg-usc-surface border border-usc-border overflow-x-auto text-sm">
          <code className="text-usc-text">{`import { createWalletClient, http, parseAbi, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { etc } from 'viem/chains'

const USC_ADDRESS = '${USC_CONTRACT.etc}' // Replace with actual address

const account = privateKeyToAccount('0xYourPrivateKey')

const walletClient = createWalletClient({
  account,
  chain: etc,
  transport: http('${CHAINS.etc.rpc}'),
})

const erc20Abi = parseAbi([
  'function transfer(address to, uint256 amount) returns (bool)',
])

async function transferUSC(to: string, amount: number) {
  // Convert to 6 decimals
  const value = parseUnits(amount.toString(), 6)

  const hash = await walletClient.writeContract({
    address: USC_ADDRESS,
    abi: erc20Abi,
    functionName: 'transfer',
    args: [to, value],
  })

  return hash
}

// Usage: Transfer 100 USC
const txHash = await transferUSC('0xRecipient', 100)
console.log(\`Transaction: \${txHash}\`)`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Using ethers.js</h2>

      <p className="text-usc-text-secondary mb-4">
        Alternative example using <a href="https://ethers.org" target="_blank" rel="noopener noreferrer" className="text-usc-green hover:underline">ethers.js</a>.
      </p>

      <div className="mb-6">
        <p className="text-usc-text-muted text-xs mb-2">Read $USC Balance with ethers</p>
        <pre className="p-4 rounded-lg bg-usc-surface border border-usc-border overflow-x-auto text-sm">
          <code className="text-usc-text">{`import { ethers } from 'ethers'

const USC_ADDRESS = '${USC_CONTRACT.etc}' // Replace with actual address
const RPC_URL = '${CHAINS.etc.rpc}'

const provider = new ethers.JsonRpcProvider(RPC_URL)

const erc20Abi = [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
]

const contract = new ethers.Contract(USC_ADDRESS, erc20Abi, provider)

async function getUSCBalance(address: string) {
  const balance = await contract.balanceOf(address)
  const decimals = await contract.decimals()
  return ethers.formatUnits(balance, decimals)
}

// Usage
const balance = await getUSCBalance('0xYourAddress')
console.log(\`Balance: \${balance} USC\`)`}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">ERC-20 ABI Reference</h2>

      <p className="text-usc-text-secondary mb-4">
        $USC implements the standard ERC-20 interface. Here are the commonly used functions:
      </p>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead className="border-b border-usc-border">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-usc-text">Function</th>
              <th className="px-4 py-3 text-left font-semibold text-usc-text">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 font-mono text-usc-green">balanceOf(address)</td>
              <td className="px-4 py-3 text-usc-text-secondary">Get token balance of an address</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 font-mono text-usc-green">transfer(address, uint256)</td>
              <td className="px-4 py-3 text-usc-text-secondary">Transfer tokens to an address</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 font-mono text-usc-green">approve(address, uint256)</td>
              <td className="px-4 py-3 text-usc-text-secondary">Approve spender allowance</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 font-mono text-usc-green">transferFrom(address, address, uint256)</td>
              <td className="px-4 py-3 text-usc-text-secondary">Transfer using allowance</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 font-mono text-usc-green">allowance(address, address)</td>
              <td className="px-4 py-3 text-usc-text-secondary">Check spender allowance</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 font-mono text-usc-green">totalSupply()</td>
              <td className="px-4 py-3 text-usc-text-secondary">Get total token supply</td>
            </tr>
            <tr className="border-b border-usc-border">
              <td className="px-4 py-3 font-mono text-usc-green">decimals()</td>
              <td className="px-4 py-3 text-usc-text-secondary">Get token decimals (6)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-usc-text mb-4 mt-8">Related Pages</h2>

      <div className="space-y-2">
        <Link
          href="/docs/token/contracts"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Contract Addresses
        </Link>
        <Link
          href="/docs/technical/smart-contract"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Smart Contract Details
        </Link>
        <Link
          href="/docs/technical/api"
          className="flex items-center gap-2 text-usc-green hover:text-usc-green-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Brale API Reference
        </Link>
      </div>
    </div>
  );
}
