class Task {
    name: string;
    creation_date: string;
    done_date: string;
    priority: number;
    tag: string[];
    comment: string;
    repeat: boolean;
    date: string;

    constructor(name: string, creation_date: string, done_date: string, priority: number, tag: string[], comment: string, repeat: boolean, date: string) {
        this.name = name;
        this.creation_date = creation_date;
        this.done_date = done_date;
        this.priority = priority;
        this.tag = tag;
        this.comment = comment;
        this.repeat = repeat;
        this.date = date;
    }
}