class AddPriceToCameras < ActiveRecord::Migration[6.1]
  def change
    add_column :cameras, :price, :integer
  end
end
