// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
// npc.walkEast(500, () => {
//     // then walk north
//     npc.walkNorth(500, ()=>{
//         // then walk west
//         npc.walkWest(500, ()=>{
//             // then walk south and stop
//             npc.walkSouth(500, stop())
//         })
//     })
// })

// have NPC start walking north for 1400ms
npc.walkNorth(1400, ()=>{
    // have NPC start walking east for 1200ms
    npc.walkEast(1200, ()=>{
        // have NPC start walking south for 300ms
        npc.walkSouth(300, ()=>{
            // have NPC start walking east for 1500ms
            npc.walkEast(1500, ()=>{
                // have NPC start walking south for 1500ms
                npc.walkSouth(1500, ()=>{
                    // have NPC start walking west for 2700ms
                    npc.walkWest(2700, ()=>{
                        // have NPC start walking north for 400ms then stop
                        npc.walkNorth(400, stop())
                    })
                })
            })
        })
    })
})

// let products = getProducts()
// let gardeningProducts = products.filter(p => p.catagory === 'gardening')

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)