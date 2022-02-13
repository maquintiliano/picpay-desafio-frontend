export class PagamentoCreateDto {
    public name: string;
    public title: string;
    public value: string;
    public date: string;

    constructor(object?: any) {
        this.name = object.name;
        this.title = object.title;
        this.value = object.value;
        this.date = object.date;
    }
}