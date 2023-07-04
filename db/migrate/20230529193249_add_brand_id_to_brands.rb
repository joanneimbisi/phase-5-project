class AddBrandIdToBrands < ActiveRecord::Migration[6.1]
  def change
    add_column :brands, :brand_id, :integer
  end
end
