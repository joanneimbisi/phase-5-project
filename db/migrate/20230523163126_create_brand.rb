class CreateBrand < ActiveRecord::Migration[6.1]
  def change
    create_table :brands do |t|
      t.string :brand_id
      t.string :brand_name
      
      t.timestamps
    end
  end
end
