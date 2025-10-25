package account

import "sync"

// Account defines a bank account.
type Account struct {
	amount int64
	isOpen bool
	mu     *sync.Mutex
}

func Open(amount int64) *Account {
	if amount < 0 {
		return nil
	}
	return &Account{amount, true, new(sync.Mutex)}
}

func (a *Account) Balance() (int64, bool) {
	if a.isOpen {
		return a.amount, a.isOpen
	}
	return 0, a.isOpen
}

func (a *Account) Deposit(amount int64) (int64, bool) {
	a.mu.Lock()
	defer a.mu.Unlock()
	if a.isOpen {
		if (a.amount + amount) < 0 {
			return a.amount, false
		}
		a.amount += amount
		return a.amount, true
	}
	return a.amount, false
}

func (a *Account) Close() (int64, bool) {
	a.mu.Lock()
	defer a.mu.Unlock()
	if !a.isOpen {
		return 0, false
	}
	a.isOpen = false
	amount := a.amount
	a.amount = 0
	return amount, true
}
