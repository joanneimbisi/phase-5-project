class AddImageUrlToCameras < ActiveRecord::Migration[6.1]
  def change
    add_column :cameras, :image_url, :string
  end
end
