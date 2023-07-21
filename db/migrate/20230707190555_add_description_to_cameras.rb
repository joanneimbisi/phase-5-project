class AddDescriptionToCameras < ActiveRecord::Migration[6.1]
  def change
    add_column :cameras, :description, :string
  end
end
