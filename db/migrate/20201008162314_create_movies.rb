class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :poster
      t.string :tipo
      t.boolean :favorite, default: false
      t.timestamps
    end
  end
end
