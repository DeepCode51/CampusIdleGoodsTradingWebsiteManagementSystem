const base = {
    get() {
                return {
            url : "http://localhost:8080/springboota6jgt/",
            name: "springboota6jgt",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboota6jgt/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园闲置物品交易网站"
        } 
    }
}
export default base
