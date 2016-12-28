export class CompleterService{
    data : any;
    searchField : any;

    constructor(data : any, searchField : any) {
        this.data = data;
        this.searchField = searchField;
    }

    getData() {
        return this.data; 
    }

    getSearchField() {
        return this.searchField;
    }
}