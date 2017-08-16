class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :notes, :completed_at
  attributes :created

  def created
    object.created_at.to_i
  end
end
