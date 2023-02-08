require "rails_helper"

RSpec.describe Apartment, type: :model do
    it 'must have a street' do
        apartment = Apartment.create(
        street: "", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com",
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:street]).to_not be_empty
    end
    it 'must have a city' do
        apartment = Apartment.create(
        street: "1", 
        city: "", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "3", 
        pets: "yes", 
        image: "http:url.com", 
        user_id: '1')
        expect(apartment.errors[:city]).to_not be_empty
    end
    it 'must have a state' do
        apartment = Apartment.create(
        street: '1', 
        city: "America Town", 
        state: "", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:state]).to_not be_empty
    end
    it 'must have a manager' do
        apartment = Apartment.create( 
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:manager]).to_not be_empty
    end
    it 'must have a email' do
        apartment = Apartment.create(
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "", 
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:email]).to_not be_empty
    end
    it 'must have a price' do
        apartment = Apartment.create( 
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:price]).to_not be_empty
    end
    it 'must have a bedrooms' do
        apartment = Apartment.create( 
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "", 
        bathrooms: '2', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:bedrooms]).to_not be_empty
    end
    it 'must have a bathrooms' do
        apartment = Apartment.create( 
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:bathrooms]).to_not be_empty
    end
    it 'must have a pets' do
        apartment = Apartment.create( 
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "", 
        image: "http:url.com", 
        user_id: "1")
        expect(apartment.errors[:pets]).to_not be_empty
    end
    it 'must have a image' do
        apartment = Apartment.create( 
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "yes", 
        image: "", 
        user_id: "1")
        expect(apartment.errors[:image]).to_not be_empty
    end
    it 'must have a user_id' do
        apartment = Apartment.create(
        street: "1", 
        city: "America Town", 
        state: "CA", 
        manager: "Ryan", 
        email: "ryanrealty@gmail.com", 
        price: "400,000", 
        bedrooms: "3", 
        bathrooms: '2', 
        pets: "yes", 
        image: "http:url.com", 
        user_id: "")
        expect(apartment.errors[:user_id]).to_not be_empty
    end
end
