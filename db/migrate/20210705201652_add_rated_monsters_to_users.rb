class AddRatedMonstersToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :rated_monsters, :string
  end
end
