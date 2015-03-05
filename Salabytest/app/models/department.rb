class Department < ActiveRecord::Base

  has_many :department_members
  has_many :users, through: :department_members

  belongs_to :school

end
