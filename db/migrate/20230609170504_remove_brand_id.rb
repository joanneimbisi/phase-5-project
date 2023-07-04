class RemoveBrandId < ActiveRecord::Migration[6.1]
  def change
    remove_column :brands, :brand_id
    remove_column :cameras, :camera_id
    remove_column :cameras, :brand
    add_column :cameras, :brand_id, :integer
    remove_column :cameras, :order_id
    rename_column :orders, :customer_id, :user_id
    remove_column :users, :user_id
  end
end
