let images=[
'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
'https://images.unsplash.com/photo-1511920170033-f8396924c348'
]

let i=0

setInterval(()=>{
i=(i+1)%images.length
document.getElementById('slide').src=images[i]
},3000)