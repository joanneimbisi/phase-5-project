class RemoveBrandIdToBrands < ActiveRecord::Migration[6.1]
  def change
    remove_column :brands, :brand_id, :string
  end
end
