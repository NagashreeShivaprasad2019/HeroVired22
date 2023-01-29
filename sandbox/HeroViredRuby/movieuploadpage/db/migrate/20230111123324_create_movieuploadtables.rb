class CreateMovieuploadtables < ActiveRecord::Migration[7.0]
  def change
    create_table :movieuploadtables do |t|
      t.string :moviename
      t.string :moviedesc
      t.string :moviedirector
      t.string :movielanguage

      t.timestamps
    end
  end
end
