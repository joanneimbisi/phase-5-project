# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
=begin
orders = [
    {
        first_name:"Josh",
        last_name:"Smith",
        shipping_address:"5825 Sunrise Blvd, Roseville, CA 95841"
        
    },
    {
        first_name:"Kevin",
        last_name:"Gicheha",
        shipping_address:"3562 Auburn Oaks Village, Rocklin, CA 97862"
    },
    {
        first_name:"Chloe",
        last_name:"Imbisi",
        shipping_address:"3417 Halo Way, Little Rock, LA 97632"
    },
    {
        first_name:"Macy",
        last_name:"Gray",
        shipping_address:"1394 Moonbeam Drive, Rancho Cordova, CA 95616"
    },
    {
        first_name:"Sarah",
        last_name:"Haskell",
        shipping_address:"8030 Madison Avenue, Sacramento, CA 95841"
    },
    {
        first_name:"Ava",
        last_name:"Rose",
        shipping_address:"783 Cypress Blvd, "
    },
    {
        first_name:"Joey",
        last_name:"Coleman",
        shipping_address:"1234 Lilypad Drive, Boston, MA 02110"
    }
]

Order.create!(orders)
=end



brands = [
    {
        id: 1,
        brand_name: 'Canon'
    },
    {
        id: 2,
        brand_name: 'Sony'
    },
    {
        id: 3,
        brand_name: 'Olympus'
    },
    {
        id: 4,
        brand_name: 'Nikon'
    },
    {
        id: 5,
        brand_name: 'Leica'
    }
]

Brand.delete_all
Brand.create!(brands)

# Database Normalization 

cameras = [{ camera_name: 'Canon EOS R5 Mirrorless Camera', price: 3399, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_r5_mirrorless_digital_1594282826_1547009.jpg", brand_id: 1 }, 
{ camera_name: 'Sony Alpha a7 III Mirrorless', price: 1198.50, image_url:"https://i5.walmartimages.com/asr/9fa7d756-0ba4-47e4-9f37-c866a776e78e.d4066b54d2c8cdc8b364178608444e79.jpeg", brand_id: 2 }, 
{camera_name: "Sony a7 Full-frame Mirrorless", price: 6498, image_url:"https://m.media-amazon.com/images/I/810+msx2AHL.jpg", brand_id: 2}, {camera_name: "Sony ZV-E1 Mirrorless Camera (Black)",price: 2198, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_zv_e1_mirrorless_camera_black_1680084933_1759472.jpg", brand_id: 2 },
{camera_name: "Nikon Z6 II Mirrorless Camera", price: 1696.95,
image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_z_6_ii_mirrorless_1602636707_1597167.jpg", brand_id: 4}, 
{camera_name: "Nikon Z8 Mirrorless Camera with 24-120mm f/4 Lens", price: 4896.95, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_1698_z8_mirrorless_camera_with_1683705043_1766342.jpg", brand_id: 4}, 
{camera_name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens",   price: 399, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_2727c002_eos_rebel_t7_dslr_1550657171_1461734.jpg", brand_id: 1 }, 
{camera_name: "Canon PowerShot G7 X Mark III Digital Camera (Black)", price: 699, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_3637c001_powershot_g7_x_mark_1562622339_1490985.jpg", brand_id: 1} 
]

 #Order.all.each do |order|

    #camera_sample = cameras.sample
Camera.delete_all
Camera.create!(cameras)
#end