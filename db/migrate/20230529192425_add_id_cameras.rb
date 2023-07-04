class AddIdCameras < ActiveRecord::Migration[6.1]
  def change
    add_column :cameras, :camera_id, :integer
  end
end
