export class IEmployee {
    constructor(
        public empId: number,
        public Name: string,
        public Designation: string,
        public Gender: string,
        public Address: string,
        public Age: number,
        public Salary: number,
        public imageUrl: string,
        public loginStatus: Boolean,
        public logHistory: Array<10000>) { }
}
