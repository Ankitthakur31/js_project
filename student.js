class Student{
    addCerti(check ,certiInfo){
        
         let id = sessionStorage.getItem("id"); 
         let students = new Map(JSON.parse(localStorage.getItem('Students')));         
         let data  = students.get(id.toString());  
         console.log(data);
         console.log(data.special);
         if(check == "Certifications"){
            data.stuCerti.push(certiInfo);
         }else if(check == "Achievements"){
            data.special.push(certiInfo);
         }    
         
         console.log(students);
         localStorage.setItem('Students', JSON.stringify(Array.from(students)));
         return data;    
     }
 
     login(id){
         console.log(id);
         let students = new Map(JSON.parse(localStorage.getItem('Students')));
         let data = students.get(id);
         console.log(students);        
         if (data !== undefined) {
             sessionStorage.setItem("id" , id);
             return data.stuRole;
         }else{
             return false;
         }
         
     }
     userGet(id){
         let students = new Map(JSON.parse(localStorage.getItem('Students')));
         let data = students.get(id);
         return data;
     }

     userCerti(id){
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        let data = students.get(id);
        //console.log(data.stuCerti[0]);

        return data.stuCerti;
    }

    userAchive(id){
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        let data = students.get(id);
        //console.log(data.stuCerti[0]);

        return data.special;
    }

    deleteCertifications(id , index){
        console.log(id);
        
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        console.log(students);
        
        let data = students.get(id);
        console.log(data.stuCerti);
        data.stuCerti.splice(index,1);
        console.log(data.stuCerti);
       // console.log(data.stuCerti[index]);
        students.set(id , data);
        localStorage.setItem('Students', JSON.stringify(Array.from(students)));
        return data;    
    }

    deleteAchivements(id , index){
        console.log(id);
        
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        console.log(students);
        
        let data = students.get(id);
        console.log(data.stuCerti);
        data.special.splice(index,1);
        console.log(data.stuCerti);
       // console.log(data.stuCerti[index]);
        students.set(id , data);
        localStorage.setItem('Students', JSON.stringify(Array.from(students)));
        return data;    
    }

    getAddr(id){
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        let data = students.get(id);
        //console.log(data.stuCerti[0]);
        console.log(data.stuAddress);
        
        return data.stuAddress;
    }

    updateAddr(id , update){
        let students = new Map(JSON.parse(localStorage.getItem('Students')));
        let data = students.get(id);
        data.stuAddress = update;
        students.set(id , data);
        localStorage.setItem('Students', JSON.stringify(Array.from(students)));
        return data;
    }

    

}