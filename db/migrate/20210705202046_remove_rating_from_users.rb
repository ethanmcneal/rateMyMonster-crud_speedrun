class RemoveRatingFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :rated_monsters
  end
end
