# Review Command

Perform a read-only code review of the specified files or recent changes.

## Instructions

Review the code for the following concerns. Cite specific file paths and line numbers.

### Checklist

**Correctness**
- Does the logic handle all expected inputs?
- Are edge cases covered (null, empty, boundary values)?
- Are error conditions handled appropriately?

**Security**
- No hardcoded secrets or credentials
- Input validation present where needed
- No injection vulnerabilities (SQL, XSS, command)
- Auth/authz checks in place for protected operations

**Maintainability**
- Code is readable and self-documenting
- No unnecessary complexity
- Functions/modules have single responsibility
- Magic numbers/strings extracted to constants

**Performance**
- No obvious N+1 queries or unbounded loops
- Expensive operations not in hot paths
- Resources properly cleaned up (connections, handles)

### Output Format

For each issue found:

```
[SEVERITY] file/path.ext:L##-##
Issue: Brief description
Why: Impact explanation
Fix: Suggested change
```

Severity levels: `CRITICAL` | `HIGH` | `MEDIUM` | `LOW` | `NIT`

### Summary

End with:
- Total issues by severity
- Overall assessment (approve / request changes / block)
