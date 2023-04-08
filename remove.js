var db = getFirestore(app)
var ref = collection(db,'name')
var qu= query(ref,where('name','==','wfage3ehrst5jhrtsh'))
var remove=async ()=>{
var wi= await getDocs(qu)
wi.forEach(item=>{
    console.log(item.id)
    deleteDoc(db,'name',item.id)
})
}
remove()