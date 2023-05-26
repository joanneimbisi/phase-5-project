class AddBrandToCameras < ActiveRecord::Migration[6.1]
  def change
    add_column :cameras, :brand, :string
  end
end
