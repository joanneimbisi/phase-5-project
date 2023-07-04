class RemoveCameraIdToCameras < ActiveRecord::Migration[6.1]
  def change
    remove_column :cameras, :camera_id, :string
  end
end
