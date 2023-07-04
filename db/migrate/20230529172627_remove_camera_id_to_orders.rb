class RemoveCameraIdToOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :camera_id, :string
  end
end
