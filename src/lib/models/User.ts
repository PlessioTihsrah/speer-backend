const db: any = {};

class User {
    public static exists(email: string) {
        return !!db[email];
    }

    public static findByEmail(email: string) {
        if (this.exists(email)) {
            return { email };
        } else {
            return null
        }
    }

    public static create(email: string, password: string) {
        db[email] = password;
        return { email }
    }

    public static validate(email: string, password: string) {
        return db[email] && db[email] == password;
    }
}

export default User;