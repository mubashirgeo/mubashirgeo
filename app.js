let image = document.getElementById('carouselExample')
let images= document.querySelectorAll('.d-block w-100')
let imageclick = (clickimage)=>{
    // clickimage.src = image.style.display='block' 
    // image.style.display='block' = images.src

    clickimage.src = images.src
    image.style.display='block'
    document.getElementById('cross').style.display ='flex'
    
    
}
function cross(){
    image.style.display= 'none'
    document.getElementById('cross').style.display='none'
}

var tl = gsap.timeline()
gsap.from('.card',{
    y:200,
    duration:2,
    scrollTrigger:{
        trigger:'.card',
        scroll:'body',
        start:'top 80%',
        end:'end 70%',
        // markers:true,
        scrub:2,

    }
})
gsap.from('#image-1 , #image-3 , #image-6 ,#image-8' ,{
    y:150,
    scrollTrigger:{
        trigger:'#image-1',
        scroll:'body',
        scrub:2,
        // markers:true,
        start:'top 90%',
        end:'end 70%'
    }
})
gsap.from('#image-2 , #image-4 , #image-5 ,#image-7' ,{
    x:150,
    scrollTrigger:{
        trigger:'#image-1',
        scroll:'body',
        scrub:2,
        // markers:true,
        start:'top 80%',
        end:'end 60%'
    }
})
gsap.from('.p6-card',{
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:'.p6-card',
        scroll:'body',
        start:'top 80%',
        end:'end 50%',
        // markers:true,
        // scrub:2,
        scale:0.5
    }
})