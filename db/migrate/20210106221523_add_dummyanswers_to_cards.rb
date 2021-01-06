class AddDummyanswersToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :dummyanswers, :string, array: true, default: []
  end
end
