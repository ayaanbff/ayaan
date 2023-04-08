
if(window.innerWidth<=600)
{
    document.getElementById('lefi').remove()
    document.getElementById('righti').remove()
    document.getElementById('las').remove()
    document.getElementById('sh').remove()
    document.getElementById('ass').remove()

}
else{
    if(WEBGL.isWebGLAvailable()){
        var te
       
        const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, document.getElementById('lefi').width/document.getElementById('lefi').height,0.1,1000)
const renderer = new THREE.WebGLRenderer({
    canvas:document.querySelector('#lefi')
})
renderer.setSize(
    document.getElementById('lefi').width,document.getElementById('lefi').height
)
te = new THREE.TextureLoader().load('./te.webp')

// document.getElementById('lefi').onmouseleave=()=>{
//     return animate()

// }
const material = new THREE.MeshBasicMaterial({map:te})
const geo= new THREE.BoxGeometry(2,2,2)
var cube = new THREE.Mesh(geo,material)
camera.position.z=3
// renderer.setPixelRatio(window.devicePixelRatio)
cube.rotation.z=1
cube.rotation.x=2
cube.rotation.y=3

scene.add(cube)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = document.getElementById('lefi').width/document.getElementById('lefi').height
    camera.updateProjectionMatrix()
    renderer.setSize(document.getElementById('lefi').width,document.getElementById('lefi').height)

    renderer.render(scene,camera)
}
const scene1 = new THREE.Scene()
const camera1 = new THREE.PerspectiveCamera(75, document.getElementById('righti').width/document.getElementById('righti').height,0.1,1000)
const renderer1 = new THREE.WebGLRenderer({
    canvas:document.querySelector('#righti')
})
renderer1.setSize(
    document.getElementById('righti').width,document.getElementById('righti').height
)
const material1 = new THREE.MeshBasicMaterial({map:te})
const geo1= new THREE.BoxGeometry(2,2,2)
var cube1 = new THREE.Mesh(geo1,material1)
const sphere = new THREE.SphereGeometry(15,30,17)
const spherem= new THREE.MeshBasicMaterial({color:"red"})
const sp= new THREE.Mesh(sphere,material1)

cube1.rotation.z=1
cube1.rotation.x=2
cube1.rotation.y=3

scene1.add(cube1)
camera1.position.z=3
   function keypress(c){
    for(var a=0;a<=200;a++)
            jQuery.event.trigger({
                type:'keypress',
                which:c.charCodeAt(0)
            })
        }
document.querySelector(".sphere").onclick=()=>{
    scene1.remove(cube1)
    scene.remove(cube)
    cube1= new THREE.Mesh(sphere,material1)
    cube=sp
    scene1.add(cube1)
    scene.add(cube)
camera1.position.z=30
camera.position.z=30

        }
        document.querySelector(".cube").onclick=()=>{
            scene1.remove(cube1)
            scene.remove(cube)
            cube1= new THREE.Mesh(geo1,material1)
            cube=new THREE.Mesh(geo,material1)
            scene1.add(cube1)
            scene.add(cube)
            camera.position.z=3
        camera1.position.z=3
                }
                var geo2= new THREE.TorusGeometry(10, 3, 16, 100 )
                document.querySelector(".torus").onclick=()=>{
                    scene1.remove(cube1)
                    scene.remove(cube)
                    var material12= new THREE.MeshBasicMaterial({map:te,wireframe:true})
                    cube1= new THREE.Mesh(geo2,material12)
                    cube=new THREE.Mesh(geo2,material12)
                    scene1.add(cube1)
                    scene.add(cube)
                    camera.position.z=23
                camera1.position.z=23
                        }
const animate1 = function()
{
    requestAnimationFrame(animate1)
   
    document.body.onkeypress=(e)=>{
        if(e.keyCode==119){
       rotateup()
    }
    if(e.keyCode==115){
       rotatedown()
    }
    if(e.keyCode==97){
       rotateleft()
    }
    if(e.keyCode==100){
       rotateright()
    }
    if(e.keyCode==101){
       rotatez1()
    }
    if(e.keyCode==113){
       rotatez2()
    }
    function rotatez1(){
        cube1.rotation.z-=.06
        cube.rotation.z-=.06

}
function rotatez2(){
        cube1.rotation.z+=.06
        cube.rotation.z+=.06
        
}
function rotateup(){
        cube1.rotation.x-=.06
        cube.rotation.x-=.06

}
function rotatedown(){
        cube1.rotation.x+=.06
        cube.rotation.x+=.06

}
function rotateleft(){
    cube1.rotation.y-=.06
    cube.rotation.y-=.06

    
}
function rotateright(){
    cube1.rotation.y+=.06
    cube.rotation.y+=.06

    
}
}


renderer1.render(scene1,camera1)
renderer.render(scene,camera)
}
animate1()
    }
    else{}
}