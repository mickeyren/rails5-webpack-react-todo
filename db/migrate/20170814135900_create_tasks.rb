class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :notes
      t.datetime :completed_at

      t.timestamps
    end
  end
end
