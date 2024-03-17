export interface IUser {
    id?:        string;
    email:      string;
    username:   string;
    password:   string;
    isActive?:  boolean;
    token?:     string;
    roles?:     string[];
    logo?:      string;
    instagram?: string;
}