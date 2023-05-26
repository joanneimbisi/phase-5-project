class CreateCameras < ActiveRecord::Migration[6.1]
  def change
    create_table :cameras do |t|
      t.string :camera_id
      t.string :camera_name
      t.string :price

      t.timestamps
    end
  end
end
