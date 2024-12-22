class User {
	static userName: string;
	private surname: string;
	protected age: number;

	constructor(userName: string, surname: string, age: number) {
		User.userName = userName;
		this.age = age;
		this.surname = surname;
	}

	public setAge(age: number): void {
		this.age = age;
	}

	public getAge(): number {
		return this.age;
	}

	public getSurname() {
		return this.surname;
	}
}

const user = new User("Max", "M", 19);
console.log(user.getSurname());
