class CreateMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :monsters do |t|
      t.string :name
      t.string :race
      t.string :description
      t.integer :rating

      t.timestamps
    end
  end
end
