// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  const positiveBalanceAccounts = array.filter(account => account.balance > 0);
  if (positiveBalanceAccounts.length === 0) {
    return [];
  }
  const accountWithLeastBalance = positiveBalanceAccounts.reduce((minAccount, account) => 
    account.balance < minAccount.balance ? account : minAccount
  );

  return [accountWithLeastBalance];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
