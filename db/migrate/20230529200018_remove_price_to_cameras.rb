class RemovePriceToCameras < ActiveRecord::Migration[6.1]
  def change
    remove_column :cameras, :price, :string
  end
end
