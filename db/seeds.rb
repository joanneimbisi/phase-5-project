# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
=begin

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



cameras = [{ camera_name: 'Canon EOS R5 Mirrorless Camera', price: 3399, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_eos_r5_mirrorless_digital_1594282826_1547009.jpg", brand_id: 1, description: "For the professional image-maker who needs resolution, speed, and video capabilities, the Canon EOS R5 full-frame mirrorless camera features a newly developed 45MP CMOS sensor, which offers 8K raw video recording, 12 fps continuous shooting with a mechanical shutter, and is the first EOS camera to feature 5-axis sensor-shift image stabilization." }, 
{ camera_name: 'Sony Alpha a7 III Mirrorless', price: 1198.50, image_url:"https://static.bhphoto.com/images/images500x500/sony_ilce_7m3_alpha_a7_iii_mirrorless_1519677934_1394217.jpg", brand_id: 2, description: "Distinguished by its updated sensor design, the Sony a7 III is a well-rounded camera suitable for both photo and video applications in a variety of working situations. Refined for improved speed and low-light performance, a new 24.2MP Exmor R BSI CMOS sensor and BIONZ X processor benefit image quality, video capabilities, and AF performance. The a7 III also sports a revised body design, with a new touchscreen LCD, improved EVF, larger battery, and dual memory card slots."}, 
{camera_name: "Sony a7 Full-frame Mirrorless", price: 6498, image_url:"https://m.media-amazon.com/images/I/810+msx2AHL.jpg", brand_id: 2, description:"An all-arounder that pushes beyond basic, the Sony a7 IV does double duty with strong stills and video performance. An advanced hybrid mirrorless camera, the a7 IV has the resolution and AF performance that appeals to photographers along with robust 4K 60p video recording for filmmakers and content creators."}, {camera_name: "Sony ZV-E1 Mirrorless Camera (Black)",price: 2198, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_zv_e1_mirrorless_camera_black_1680084933_1759472.jpg", brand_id: 2, description: "An all-arounder that pushes beyond basic, the Sony a7 IV does double duty with strong stills and video performance. An advanced hybrid mirrorless camera, the a7 IV has the resolution and AF performance that appeals to photographers along with robust 4K 60p video recording for filmmakers and content creators." },
{camera_name: "Nikon Z6 II Mirrorless Camera", price: 1696.95,
image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_z_6_ii_mirrorless_1602636707_1597167.jpg", brand_id: 4, description: "More speed, more versatility, more performance, the Nikon Z6 II is an updated take on the all-rounder mirrorless camera designed for high-end photo and video applications. Despite the wealth of upgrades, the Z6 II retains its familiar form factor and prized image quality to benefit working multimedia image-makers."}, 
{camera_name: "Nikon Z8 Mirrorless Camera with 24-120mm f/4 Lens", price: 4896.95, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_1698_z8_mirrorless_camera_with_1683705043_1766342.jpg", brand_id: 4, description: "Built using flagship DNA, the Nikon Z8 is a compact, lightweight camera housing much of the technology from the Z9 but in a sleeker, more portable package. Dubbed the ultimate hybrid camera, the Z8 features the same proven sensor, processing, and AF capabilities of the flagship with a new body design that better suits gimbal use, event shooting, and other handheld applications."}, 
{camera_name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens",   price: 399, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_2727c002_eos_rebel_t7_dslr_1550657171_1461734.jpg", brand_id: 1, description:"Compact and capable, the Canon EOS Rebel T7 is a sleek entry-level DSLR featuring versatile imaging capabilities and a helpful feature-set. Incorporating a 24.1MP APS-C CMOS sensor and DIGIC 4+ image processor, the T7 produces high-resolution stills with notable clarity, reduced noise, and a flexible native sensitivity range from ISO 100-6400 for working in a variety of lighting conditions." }, 
{camera_name: "Canon PowerShot G7 X Mark III Digital Camera (Black)", price: 699, image_url:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/canon_3637c001_powershot_g7_x_mark_1562622339_1490985.jpg", brand_id: 1, description:"Offering multimedia fluency within a compact design, the black Canon PowerShot G7 X Mark III is a sleek camera distinguished by its advanced sensor design and flexible imaging capabilities"} 
]

#  Order.all.each do |order|

    # camera_sample = cameras.sample
Camera.delete_all
Camera.create!(cameras)
# end