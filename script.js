const searchFun = () =>{
    let filter =document.getElementById("MyInput").value.toUpperCase();
    let myTable = document.getElementById("table");
    let tr = myTable.getElementsByTagName("tr");
    for(var i=0;i<tr.length;i++){
        let th=tr[i].getElementsByTagName("th")[0];
        if(th){
            let textvalue = th.textContent || th.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
}