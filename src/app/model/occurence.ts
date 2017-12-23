import { User } from '../model/user';

export class Occurence {
    public createdDate: String;
    public closedDate: String;
    public description: String;
    public users: User[];
}
