pragma solidity ^0.5.0;


contract OpenGreffe {
  struct Person {
    string firstName;
    string lastName;
    uint dateOfBirth;
    uint companyIndex;
  }
  struct Company {
    string name;
    uint capital;
  }

  Person[] public persons;
  Company[] public companies;
  mapping (address => uint) public companyIndexByAddress;
  mapping (uint => uint[]) public personIndicesByCompanyIndex;

  event CompanyCreated(address _from, uint companyIndex);

  function createCompany(
    string memory name,
    uint capital
  ) public returns (uint) {
    uint companyIndex = companies.push(Company(name, capital));
    emit CompanyCreated(msg.sender, companyIndex);
    return companyIndex;
  }

  function createPerson(
    string memory firstName,
    string memory lastName,
    uint dateOfBirth,
    uint companyIndex
  ) public returns (uint) {
    uint personIndex = persons.push(Person(firstName, lastName, dateOfBirth, companyIndex));
    personIndicesByCompanyIndex[companyIndex].push(personIndex);
    return personIndex;
  }

  function setAddrForCompany(
    address addr,
    uint companyIndex
  ) public {
    companyIndexByAddress[addr] = companyIndex;
  }

  function lookupByAddress(address addr) public view returns(
    uint, uint[] memory
  ) {
    uint companyIndex = companyIndexByAddress[addr];
    uint[] memory personIndices = personIndicesByCompanyIndex[companyIndex];
    return (companyIndex, personIndices);
  }
}
