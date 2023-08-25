class UserNameVault {
    private static instance: UserNameVault;
    private subscriptions: ((userName: string) => void)[] = [];

    public static getInstance(): UserNameVault {
        if (!UserNameVault.instance) {
            UserNameVault.instance = new UserNameVault();
        }

        return UserNameVault.instance;
    }

    public subscribe(callback: (userName: string) => void): void {
        this.subscriptions.push(callback);
        console.log(this.subscriptions);
    }

    public unsubscribe(callback: (userName: string) => void): void {
        this.subscriptions = this.subscriptions.filter(subscription => subscription !== callback);
        console.log(this.subscriptions);
    }

    // field
    setUserName(userName: string): void {
        this.subscriptions.forEach(subscription => subscription(userName));
    }
}

export default UserNameVault;