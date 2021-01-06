class AddTypeToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :questiontype, :string
  end
end
