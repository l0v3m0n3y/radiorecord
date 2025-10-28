class radiorecord{
    constructor(){
        this.api ="https://www.radiorecord.ru/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json"}
    }
    async now_stations(){
        let req=await fetch(`${this.api}/stations/now/`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async stations_list(){
        let req=await fetch(`${this.api}/stations/`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async banners_list(){
        let req=await fetch(`${this.api}/banners/`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_news(){
        let req=await fetch(`${this.api}/news`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async podcast_list(){
        let req=await fetch(`${this.api}/podcasts`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_podcast(id){
        let req=await fetch(`${this.api}/podcast/?id=${id}`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async get_cities(){
        let req=await fetch(`${this.api}/cities/frequency`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async super_chart(){
        let req=await fetch(`${this.api}/superchart`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async club_chart(){
        let req=await fetch(`${this.api}/clubchart`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async upcoming_events(){
        let req=await fetch(`${this.api}/events/upcoming/`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async schedule(){
        let req=await fetch(`${this.api}/static/schedule`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async advertisement(){
        let req=await fetch(`${this.api}/static/advertisement`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async about(){
        let req=await fetch(`${this.api}/static/about`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async agreement(){
        let req=await fetch(`${this.api}/static/agreement`,{method:"GET",headers: this.headers});
        return req.json()
    }
    async policy(){
        let req=await fetch(`${this.api}/static/policy`,{method:"GET",headers: this.headers});
        return req.json()
    }
}
module.exports = {radiorecord};