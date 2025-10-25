import threading


class BankAccount(object):
    def __init__(self):
        self.balance = 0
        self.account_open = False
        self.lock = threading.Lock()

    def get_balance(self):
        if not self.account_open:
            raise ValueError("Account already closed")
        return self.balance

    def open(self):
        if self.account_open:
            raise ValueError("Can't open already opened account")
        self.balance = 0
        self.account_open = True

    def deposit(self, amount):
        with self.lock:
            if not self.account_open:
                raise ValueError("Can't deposit into closed account")
            if amount < 0:
                raise ValueError("Can't deposit negative amount")
            self.balance += amount

    def withdraw(self, amount):
        with self.lock:
            if self.balance == 0:
                raise ValueError("Can't withdraw with 0 balance")

            if amount < 0:
                raise ValueError("Can't withdraw negative amount")
            
            if amount > self.balance:
                raise ValueError("Account does not support overdrafts")

            self.balance -= amount

    def close(self):
        if not self.account_open:
            raise ValueError("Account already closed")
        self.account_open = False

