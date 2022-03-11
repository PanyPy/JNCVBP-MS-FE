import gql from "graphql-tag";
import * as React from "react";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type CreateDutyInput = {
  name: Scalars["String"];
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
};

export type CreateEventInput = {
  description: Scalars["String"];
  created_by?: Maybe<OnlyIdVolunteerInput>;
};

export type CreateFireCauseInput = {
  name: Scalars["String"];
};

export type CreateFireClassInput = {
  name: Scalars["String"];
};

export type CreateFireTypeInput = {
  name: Scalars["String"];
};

export type CreateGuardInput = {
  start_time: Scalars["Timestamp"];
  end_time: Scalars["Timestamp"];
  volunteers: Array<OnlyIdVolunteerInput>;
};

export type CreateRankInput = {
  name: Scalars["String"];
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
};

export type CreateServiceInput = {
  description: Scalars["String"];
  volunteers?: Maybe<Array<OnlyIdVolunteerInput>>;
  call_time: Scalars["String"];
  departure_time: Scalars["String"];
  arrival_time: Scalars["String"];
  withdrawal_time: Scalars["String"];
  locality: Scalars["String"];
  neighborhood: Scalars["String"];
  address: Scalars["String"];
  place: Scalars["String"];
  alerted_by: Scalars["String"];
  phone: Scalars["String"];
  received_by: Scalars["String"];
  crew: Scalars["String"];
  officer_in_charge: OnlyIdVolunteerInput;
  fire_type: OnlyIdFireTypeInput;
  fire_type_total_surface: Scalars["Float"];
  fire_type_burned_surface: Scalars["Float"];
  fire_type_description: Scalars["String"];
  affected_owner: Scalars["String"];
  affected_owner_description: Scalars["String"];
  possible_cause: OnlyIdFireClassInput;
  possible_cause_other_description: Scalars["String"];
  fire_class: Array<OnlyIdFireClassInput>;
  magnitude: Scalars["String"];
  damage: Scalars["String"];
};

export type CreateTrainingInput = {
  description: Scalars["String"];
  date: Scalars["DateTime"];
  volunteers: Array<OnlyIdVolunteerInput>;
};

export type CreateUserInput = {
  name: Scalars["String"];
};

export type CreateVolunteerInput = {
  name: Scalars["String"];
  code: Scalars["String"];
  address?: Maybe<Scalars["String"]>;
  blood_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  incorporation_date?: Maybe<Scalars["DateTime"]>;
  birth_date?: Maybe<Scalars["DateTime"]>;
  rank?: Maybe<OnlyIdTypeInput>;
};

export type Duty = {
  __typename?: "Duty";
  id: Scalars["String"];
  name: Scalars["String"];
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
};

export type Event = {
  __typename?: "Event";
  id: Scalars["String"];
  _id: Scalars["String"];
  description: Scalars["String"];
  created_by?: Maybe<Volunteer>;
};

export type FireCause = {
  __typename?: "FireCause";
  id: Scalars["String"];
  _id: Scalars["String"];
  name: Scalars["String"];
};

export type FireClass = {
  __typename?: "FireClass";
  id?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FireType = {
  __typename?: "FireType";
  id?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Guard = {
  __typename?: "Guard";
  id: Scalars["String"];
  start_time: Scalars["Timestamp"];
  end_time: Scalars["Timestamp"];
  volunteers?: Maybe<Array<Volunteer>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: User;
  updateUser: User;
  removeUser: User;
  createDuty: Duty;
  updateDuty: Duty;
  removeDuty: Duty;
  createRank: Rank;
  updateRank: Rank;
  removeRank: Rank;
  createService: Service;
  updateService: Service;
  removeService: Service;
  createVolunteer: Volunteer;
  updateVolunteer: Volunteer;
  removeVolunteer: Volunteer;
  createFireType: FireType;
  updateFireType: FireType;
  removeFireType: FireType;
  createFireCause: FireCause;
  updateFireCause: FireCause;
  removeFireCause: FireCause;
  createFireClass: FireClass;
  updateFireClass: FireClass;
  removeFireClass: FireClass;
  createGuard: Guard;
  updateGuard: Guard;
  removeGuard: Guard;
  createEvent: Event;
  updateEvent: Event;
  removeEvent: Event;
  createTraining: Training;
  updateTraining: Training;
  removeTraining: Training;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationRemoveUserArgs = {
  id: Scalars["String"];
};

export type MutationCreateDutyArgs = {
  createDutyInput: CreateDutyInput;
};

export type MutationUpdateDutyArgs = {
  updateDutyInput: UpdateDutyInput;
};

export type MutationRemoveDutyArgs = {
  id: Scalars["String"];
};

export type MutationCreateRankArgs = {
  createRankInput: CreateRankInput;
};

export type MutationUpdateRankArgs = {
  updateRankInput: UpdateRankInput;
};

export type MutationRemoveRankArgs = {
  id: Scalars["String"];
};

export type MutationCreateServiceArgs = {
  createServiceInput: CreateServiceInput;
};

export type MutationUpdateServiceArgs = {
  updateServiceInput: UpdateServiceInput;
};

export type MutationRemoveServiceArgs = {
  id: Scalars["String"];
};

export type MutationCreateVolunteerArgs = {
  createVolunteerInput: CreateVolunteerInput;
};

export type MutationUpdateVolunteerArgs = {
  updateVolunteerInput: UpdateVolunteerInput;
};

export type MutationRemoveVolunteerArgs = {
  id: Scalars["String"];
};

export type MutationCreateFireTypeArgs = {
  createFireTypeInput: CreateFireTypeInput;
};

export type MutationUpdateFireTypeArgs = {
  updateFireTypeInput: UpdateFireTypeInput;
};

export type MutationRemoveFireTypeArgs = {
  id: Scalars["String"];
};

export type MutationCreateFireCauseArgs = {
  createFireCauseInput: CreateFireCauseInput;
};

export type MutationUpdateFireCauseArgs = {
  updateFireCauseInput: UpdateFireCauseInput;
};

export type MutationRemoveFireCauseArgs = {
  id: Scalars["String"];
};

export type MutationCreateFireClassArgs = {
  createFireClassInput: CreateFireClassInput;
};

export type MutationUpdateFireClassArgs = {
  updateFireClassInput: UpdateFireClassInput;
};

export type MutationRemoveFireClassArgs = {
  id: Scalars["String"];
};

export type MutationCreateGuardArgs = {
  createGuardInput: CreateGuardInput;
};

export type MutationUpdateGuardArgs = {
  updateGuardInput: UpdateGuardInput;
};

export type MutationRemoveGuardArgs = {
  id: Scalars["String"];
};

export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
};

export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
};

export type MutationRemoveEventArgs = {
  id: Scalars["String"];
};

export type MutationCreateTrainingArgs = {
  createTrainingInput: CreateTrainingInput;
};

export type MutationUpdateTrainingArgs = {
  updateTrainingInput: UpdateTrainingInput;
};

export type MutationRemoveTrainingArgs = {
  id: Scalars["String"];
};

export type OnlyIdFireClassInput = {
  _id: Scalars["String"];
};

export type OnlyIdFireTypeInput = {
  _id: Scalars["String"];
};

export type OnlyIdTypeInput = {
  _id: Scalars["String"];
};

export type OnlyIdVolunteerInput = {
  _id: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  user: User;
  duties: Array<Duty>;
  duty: Duty;
  ranks: Array<Rank>;
  rank: Rank;
  services: Array<Service>;
  service: Service;
  volunteers: Array<Volunteer>;
  volunteer: Volunteer;
  fireTypes: Array<FireType>;
  fireType: FireType;
  fireCauses: Array<FireCause>;
  fireCause: FireCause;
  fireClasses: Array<FireClass>;
  fireClass: FireClass;
  guards: Array<Guard>;
  guard: Guard;
  events: Array<Event>;
  event: Event;
  trainings: Array<Training>;
  training: Training;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryDutyArgs = {
  id: Scalars["String"];
};

export type QueryRankArgs = {
  id: Scalars["String"];
};

export type QueryServiceArgs = {
  id: Scalars["String"];
};

export type QueryVolunteerArgs = {
  id: Scalars["String"];
};

export type QueryFireTypeArgs = {
  id: Scalars["String"];
};

export type QueryFireCauseArgs = {
  id: Scalars["String"];
};

export type QueryFireClassArgs = {
  id: Scalars["Int"];
};

export type QueryGuardArgs = {
  id: Scalars["String"];
};

export type QueryEventArgs = {
  id: Scalars["String"];
};

export type QueryTrainingArgs = {
  id: Scalars["String"];
};

export type Rank = {
  __typename?: "Rank";
  _id: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
};

export type Service = {
  __typename?: "Service";
  _id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  volunteers?: Maybe<Array<Volunteer>>;
  call_time?: Maybe<Scalars["String"]>;
  departure_time?: Maybe<Scalars["String"]>;
  arrival_time?: Maybe<Scalars["String"]>;
  withdrawal_time?: Maybe<Scalars["String"]>;
  locality?: Maybe<Scalars["String"]>;
  neighborhood?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  place?: Maybe<Scalars["String"]>;
  alerted_by?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  received_by?: Maybe<Scalars["String"]>;
  crew?: Maybe<Scalars["String"]>;
  officer_in_charge?: Maybe<Volunteer>;
  fire_type?: Maybe<FireType>;
  fire_type_total_surface?: Maybe<Scalars["Float"]>;
  fire_type_burned_surface?: Maybe<Scalars["Float"]>;
  fire_type_description?: Maybe<Scalars["String"]>;
  affected_owner?: Maybe<Scalars["String"]>;
  affected_owner_description?: Maybe<Scalars["String"]>;
  possible_cause?: Maybe<FireCause>;
  possible_cause_other_description?: Maybe<Scalars["String"]>;
  fire_class?: Maybe<Array<FireClass>>;
  magnitude?: Maybe<Scalars["String"]>;
  damage?: Maybe<Scalars["String"]>;
};

export type Training = {
  __typename?: "Training";
  id: Scalars["String"];
  description: Scalars["String"];
  date: Scalars["DateTime"];
  volunteers?: Maybe<Array<Volunteer>>;
};

export type UpdateDutyInput = {
  name?: Maybe<Scalars["String"]>;
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateEventInput = {
  description?: Maybe<Scalars["String"]>;
  created_by?: Maybe<OnlyIdVolunteerInput>;
  id: Scalars["String"];
};

export type UpdateFireCauseInput = {
  name: Scalars["String"];
  id: Scalars["String"];
};

export type UpdateFireClassInput = {
  name: Scalars["String"];
  id: Scalars["String"];
};

export type UpdateFireTypeInput = {
  name: Scalars["String"];
  id: Scalars["String"];
};

export type UpdateGuardInput = {
  start_time?: Maybe<Scalars["Timestamp"]>;
  end_time?: Maybe<Scalars["Timestamp"]>;
  volunteers?: Maybe<Array<OnlyIdVolunteerInput>>;
  id: Scalars["String"];
};

export type UpdateRankInput = {
  name?: Maybe<Scalars["String"]>;
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateServiceInput = {
  description?: Maybe<Scalars["String"]>;
  volunteers?: Maybe<Array<OnlyIdVolunteerInput>>;
  call_time?: Maybe<Scalars["String"]>;
  departure_time?: Maybe<Scalars["String"]>;
  arrival_time?: Maybe<Scalars["String"]>;
  withdrawal_time?: Maybe<Scalars["String"]>;
  locality?: Maybe<Scalars["String"]>;
  neighborhood?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  place?: Maybe<Scalars["String"]>;
  alerted_by?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  received_by?: Maybe<Scalars["String"]>;
  crew?: Maybe<Scalars["String"]>;
  officer_in_charge?: Maybe<OnlyIdVolunteerInput>;
  fire_type?: Maybe<OnlyIdFireTypeInput>;
  fire_type_total_surface?: Maybe<Scalars["Float"]>;
  fire_type_burned_surface?: Maybe<Scalars["Float"]>;
  fire_type_description?: Maybe<Scalars["String"]>;
  affected_owner?: Maybe<Scalars["String"]>;
  affected_owner_description?: Maybe<Scalars["String"]>;
  possible_cause?: Maybe<OnlyIdFireClassInput>;
  possible_cause_other_description?: Maybe<Scalars["String"]>;
  fire_class?: Maybe<Array<OnlyIdFireClassInput>>;
  magnitude?: Maybe<Scalars["String"]>;
  damage?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
};

export type UpdateTrainingInput = {
  description?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["DateTime"]>;
  volunteers?: Maybe<Array<OnlyIdVolunteerInput>>;
  id: Scalars["String"];
};

export type UpdateUserInput = {
  name?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

export type UpdateVolunteerInput = {
  name?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  blood_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  incorporation_date?: Maybe<Scalars["DateTime"]>;
  birth_date?: Maybe<Scalars["DateTime"]>;
  rank?: Maybe<OnlyIdTypeInput>;
  id: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["String"];
  name: Scalars["String"];
};

export type Volunteer = {
  __typename?: "Volunteer";
  id?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  code: Scalars["String"];
  blood_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  incorporation_date?: Maybe<Scalars["DateTime"]>;
  birth_date?: Maybe<Scalars["DateTime"]>;
  rank?: Maybe<Rank>;
};

export type VolunteerfieldsFragment = { __typename: "Volunteer" } & Pick<Volunteer, "id" | "name">;

export type GetVolunteeersQueryVariables = Exact<{ [key: string]: never }>;

export type GetVolunteeersQuery = { __typename?: "Query" } & {
  volunteers: Array<{ __typename?: "Volunteer" } & VolunteerfieldsFragment>;
};

export type EventAllFieldsFragment = { __typename?: "Event" } & Pick<Event, "id" | "description"> & {
    created_by?: Maybe<{ __typename?: "Volunteer" } & VolunteerAllFieldsFragment>;
  };

export type GetEventsQueryVariables = Exact<{ [key: string]: never }>;

export type GetEventsQuery = { __typename?: "Query" } & {
  events: Array<{ __typename?: "Event" } & EventAllFieldsFragment>;
};

export type FindEventQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindEventQuery = { __typename?: "Query" } & { event: { __typename?: "Event" } & EventAllFieldsFragment };

export type EditEventMutationVariables = Exact<{
  input: UpdateEventInput;
}>;

export type EditEventMutation = { __typename?: "Mutation" } & {
  updateEvent: { __typename?: "Event" } & EventAllFieldsFragment;
};

export type CreateEventMutationVariables = Exact<{
  input: CreateEventInput;
}>;

export type CreateEventMutation = { __typename?: "Mutation" } & {
  createEvent: { __typename?: "Event" } & EventAllFieldsFragment;
};

export type RemoveEventMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveEventMutation = { __typename?: "Mutation" } & {
  removeEvent: { __typename?: "Event" } & EventAllFieldsFragment;
};

export type GuardAllFieldsFragment = { __typename?: "Guard" } & Pick<Guard, "id" | "start_time" | "end_time"> & {
    volunteers?: Maybe<Array<{ __typename?: "Volunteer" } & VolunteerAllFieldsFragment>>;
  };

export type GetGuardsQueryVariables = Exact<{ [key: string]: never }>;

export type GetGuardsQuery = { __typename?: "Query" } & {
  guards: Array<{ __typename?: "Guard" } & GuardAllFieldsFragment>;
};

export type FindGuardQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindGuardQuery = { __typename?: "Query" } & { guard: { __typename?: "Guard" } & GuardAllFieldsFragment };

export type EditGuardMutationVariables = Exact<{
  input: UpdateGuardInput;
}>;

export type EditGuardMutation = { __typename?: "Mutation" } & {
  updateGuard: { __typename?: "Guard" } & GuardAllFieldsFragment;
};

export type CreateGuardMutationVariables = Exact<{
  input: CreateGuardInput;
}>;

export type CreateGuardMutation = { __typename?: "Mutation" } & {
  createGuard: { __typename?: "Guard" } & GuardAllFieldsFragment;
};

export type RemoveGuardMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveGuardMutation = { __typename?: "Mutation" } & {
  removeGuard: { __typename?: "Guard" } & GuardAllFieldsFragment;
};

export type TrainingAllFieldsFragment = { __typename?: "Training" } & Pick<Training, "id" | "description" | "date"> & {
    volunteers?: Maybe<Array<{ __typename?: "Volunteer" } & VolunteerAllFieldsFragment>>;
  };

export type GetTrainingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTrainingsQuery = { __typename?: "Query" } & {
  trainings: Array<{ __typename?: "Training" } & TrainingAllFieldsFragment>;
};

export type FindTrainingQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindTrainingQuery = { __typename?: "Query" } & {
  training: { __typename?: "Training" } & TrainingAllFieldsFragment;
};

export type EditTrainingMutationVariables = Exact<{
  input: UpdateTrainingInput;
}>;

export type EditTrainingMutation = { __typename?: "Mutation" } & {
  updateTraining: { __typename?: "Training" } & TrainingAllFieldsFragment;
};

export type CreateTrainingMutationVariables = Exact<{
  input: CreateTrainingInput;
}>;

export type CreateTrainingMutation = { __typename?: "Mutation" } & {
  createTraining: { __typename?: "Training" } & TrainingAllFieldsFragment;
};

export type RemoveTrainingMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveTrainingMutation = { __typename?: "Mutation" } & {
  removeTraining: { __typename?: "Training" } & TrainingAllFieldsFragment;
};

export type DutyAllFieldsFragment = { __typename?: "Duty" } & Pick<Duty, "id" | "name" | "isDeletable" | "description">;

export type GetDutiesQueryVariables = Exact<{ [key: string]: never }>;

export type GetDutiesQuery = { __typename?: "Query" } & {
  duties: Array<{ __typename?: "Duty" } & DutyAllFieldsFragment>;
};

export type FindDutyQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindDutyQuery = { __typename?: "Query" } & { duty: { __typename?: "Duty" } & DutyAllFieldsFragment };

export type EditDutyMutationVariables = Exact<{
  id: Scalars["String"];
  name: Scalars["String"];
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
}>;

export type EditDutyMutation = { __typename?: "Mutation" } & {
  updateDuty: { __typename?: "Duty" } & DutyAllFieldsFragment;
};

export type CreateDutyMutationVariables = Exact<{
  input: CreateDutyInput;
}>;

export type CreateDutyMutation = { __typename?: "Mutation" } & {
  createDuty: { __typename?: "Duty" } & DutyAllFieldsFragment;
};

export type DeleteDutyMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteDutyMutation = { __typename?: "Mutation" } & {
  removeDuty: { __typename?: "Duty" } & Pick<Duty, "id">;
};

export type FireCauseAllFieldsFragment = { __typename?: "FireCause" } & Pick<FireCause, "id" | "name">;

export type GetFireCausesQueryVariables = Exact<{ [key: string]: never }>;

export type GetFireCausesQuery = { __typename?: "Query" } & {
  fireCauses: Array<{ __typename?: "FireCause" } & FireCauseAllFieldsFragment>;
};

export type FireClassAllFieldsFragment = { __typename?: "FireClass" } & Pick<FireClass, "id" | "name">;

export type GetFireClassesQueryVariables = Exact<{ [key: string]: never }>;

export type GetFireClassesQuery = { __typename?: "Query" } & {
  fireClasses: Array<{ __typename?: "FireClass" } & FireClassAllFieldsFragment>;
};

export type FireTypeAllFieldsFragment = { __typename?: "FireType" } & Pick<FireType, "id" | "name">;

export type GetFireTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetFireTypesQuery = { __typename?: "Query" } & {
  fireTypes: Array<{ __typename?: "FireType" } & FireTypeAllFieldsFragment>;
};

export type RankAllFieldsFragment = { __typename?: "Rank" } & Pick<Rank, "id" | "name" | "isDeletable" | "description">;

export type GetRanksQueryVariables = Exact<{ [key: string]: never }>;

export type GetRanksQuery = { __typename?: "Query" } & {
  ranks: Array<{ __typename?: "Rank" } & RankAllFieldsFragment>;
};

export type FindRankQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindRankQuery = { __typename?: "Query" } & { rank: { __typename?: "Rank" } & RankAllFieldsFragment };

export type EditRankMutationVariables = Exact<{
  id: Scalars["String"];
  name: Scalars["String"];
  isDeletable?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
}>;

export type EditRankMutation = { __typename?: "Mutation" } & {
  updateRank: { __typename?: "Rank" } & RankAllFieldsFragment;
};

export type CreateRankMutationVariables = Exact<{
  input: CreateRankInput;
}>;

export type CreateRankMutation = { __typename?: "Mutation" } & {
  createRank: { __typename?: "Rank" } & RankAllFieldsFragment;
};

export type DeleteRankMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteRankMutation = { __typename?: "Mutation" } & {
  removeRank: { __typename?: "Rank" } & Pick<Rank, "id">;
};

export type ServicesAllFieldsFragment = { __typename?: "Service" } & Pick<
  Service,
  | "id"
  | "description"
  | "call_time"
  | "departure_time"
  | "arrival_time"
  | "withdrawal_time"
  | "locality"
  | "neighborhood"
  | "address"
  | "place"
  | "alerted_by"
  | "phone"
  | "received_by"
  | "crew"
  | "fire_type_total_surface"
  | "fire_type_burned_surface"
  | "fire_type_description"
  | "affected_owner"
  | "affected_owner_description"
  | "possible_cause_other_description"
  | "magnitude"
  | "damage"
> & {
    volunteers?: Maybe<Array<{ __typename?: "Volunteer" } & VolunteerAllFieldsFragment>>;
    officer_in_charge?: Maybe<{ __typename?: "Volunteer" } & VolunteerAllFieldsFragment>;
    fire_type?: Maybe<{ __typename?: "FireType" } & FireTypeAllFieldsFragment>;
    possible_cause?: Maybe<{ __typename?: "FireCause" } & FireCauseAllFieldsFragment>;
    fire_class?: Maybe<Array<{ __typename?: "FireClass" } & FireClassAllFieldsFragment>>;
  };

export type GetServicesQueryVariables = Exact<{ [key: string]: never }>;

export type GetServicesQuery = { __typename?: "Query" } & {
  services: Array<{ __typename?: "Service" } & ServicesAllFieldsFragment>;
};

export type FindServiceQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindServiceQuery = { __typename?: "Query" } & {
  service: { __typename?: "Service" } & ServicesAllFieldsFragment;
};

export type EditServiceMutationVariables = Exact<{
  input: UpdateServiceInput;
}>;

export type EditServiceMutation = { __typename?: "Mutation" } & {
  updateService: { __typename?: "Service" } & ServicesAllFieldsFragment;
};

export type CreateServiceMutationVariables = Exact<{
  input: CreateServiceInput;
}>;

export type CreateServiceMutation = { __typename?: "Mutation" } & {
  createService: { __typename?: "Service" } & ServicesAllFieldsFragment;
};

export type RemoveServiceMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveServiceMutation = { __typename?: "Mutation" } & {
  removeService: { __typename?: "Service" } & ServicesAllFieldsFragment;
};

export type VolunteerAllFieldsFragment = { __typename?: "Volunteer" } & Pick<
  Volunteer,
  "id" | "name" | "code" | "address" | "blood_type" | "status" | "incorporation_date" | "birth_date"
> & { rank?: Maybe<{ __typename?: "Rank" } & RankAllFieldsFragment> };

export type GetVolunteersQueryVariables = Exact<{ [key: string]: never }>;

export type GetVolunteersQuery = { __typename?: "Query" } & {
  volunteers: Array<{ __typename?: "Volunteer" } & VolunteerAllFieldsFragment>;
};

export type FindVolunteerQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindVolunteerQuery = { __typename?: "Query" } & {
  volunteer: { __typename?: "Volunteer" } & VolunteerAllFieldsFragment;
};

export type EditVolunteerMutationVariables = Exact<{
  input: UpdateVolunteerInput;
}>;

export type EditVolunteerMutation = { __typename?: "Mutation" } & {
  updateVolunteer: { __typename?: "Volunteer" } & VolunteerAllFieldsFragment;
};

export type CreateVolunteerMutationVariables = Exact<{
  input: CreateVolunteerInput;
}>;

export type CreateVolunteerMutation = { __typename?: "Mutation" } & {
  createVolunteer: { __typename?: "Volunteer" } & VolunteerAllFieldsFragment;
};

export type DeleteVolunteerMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteVolunteerMutation = { __typename?: "Mutation" } & {
  removeVolunteer: { __typename?: "Volunteer" } & Pick<Volunteer, "id">;
};

export const VolunteerfieldsFragmentDoc = gql`
  fragment volunteerfields on Volunteer {
    id
    name
    __typename
  }
`;
export const RankAllFieldsFragmentDoc = gql`
  fragment rankAllFields on Rank {
    id
    name
    isDeletable
    description
  }
`;
export const VolunteerAllFieldsFragmentDoc = gql`
  fragment volunteerAllFields on Volunteer {
    id
    name
    code
    address
    blood_type
    status
    incorporation_date
    birth_date
    rank {
      ...rankAllFields
    }
  }
  ${RankAllFieldsFragmentDoc}
`;
export const EventAllFieldsFragmentDoc = gql`
  fragment eventAllFields on Event {
    id
    description
    created_by {
      ...volunteerAllFields
    }
  }
  ${VolunteerAllFieldsFragmentDoc}
`;
export const GuardAllFieldsFragmentDoc = gql`
  fragment guardAllFields on Guard {
    id
    start_time
    end_time
    volunteers {
      ...volunteerAllFields
    }
  }
  ${VolunteerAllFieldsFragmentDoc}
`;
export const TrainingAllFieldsFragmentDoc = gql`
  fragment trainingAllFields on Training {
    id
    description
    date
    volunteers {
      ...volunteerAllFields
    }
  }
  ${VolunteerAllFieldsFragmentDoc}
`;
export const DutyAllFieldsFragmentDoc = gql`
  fragment dutyAllFields on Duty {
    id
    name
    isDeletable
    description
  }
`;
export const FireTypeAllFieldsFragmentDoc = gql`
  fragment fireTypeAllFields on FireType {
    id
    name
  }
`;
export const FireCauseAllFieldsFragmentDoc = gql`
  fragment fireCauseAllFields on FireCause {
    id
    name
  }
`;
export const FireClassAllFieldsFragmentDoc = gql`
  fragment fireClassAllFields on FireClass {
    id
    name
  }
`;
export const ServicesAllFieldsFragmentDoc = gql`
  fragment servicesAllFields on Service {
    id
    description
    call_time
    departure_time
    arrival_time
    withdrawal_time
    locality
    neighborhood
    address
    place
    alerted_by
    phone
    received_by
    crew
    volunteers {
      ...volunteerAllFields
    }
    officer_in_charge {
      ...volunteerAllFields
    }
    fire_type {
      ...fireTypeAllFields
    }
    fire_type_total_surface
    fire_type_burned_surface
    fire_type_description
    affected_owner
    affected_owner_description
    possible_cause {
      ...fireCauseAllFields
    }
    possible_cause_other_description
    fire_class {
      ...fireClassAllFields
    }
    magnitude
    damage
  }
  ${VolunteerAllFieldsFragmentDoc}
  ${FireTypeAllFieldsFragmentDoc}
  ${FireCauseAllFieldsFragmentDoc}
  ${FireClassAllFieldsFragmentDoc}
`;
export const GetVolunteeersDocument = gql`
  query getVolunteeers {
    volunteers {
      ...volunteerfields
    }
  }
  ${VolunteerfieldsFragmentDoc}
`;
export type GetVolunteeersComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetVolunteeersQuery, GetVolunteeersQueryVariables>,
  "query"
>;

export const GetVolunteeersComponent = (props: GetVolunteeersComponentProps) => (
  <ApolloReactComponents.Query<GetVolunteeersQuery, GetVolunteeersQueryVariables>
    query={GetVolunteeersDocument}
    {...props}
  />
);

export type GetVolunteeersProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetVolunteeersQuery, GetVolunteeersQueryVariables>;
} & TChildProps;
export function withGetVolunteeers<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetVolunteeersQuery,
    GetVolunteeersQueryVariables,
    GetVolunteeersProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetVolunteeersQuery,
    GetVolunteeersQueryVariables,
    GetVolunteeersProps<TChildProps, TDataName>
  >(GetVolunteeersDocument, {
    alias: "getVolunteeers",
    ...operationOptions,
  });
}
export type GetVolunteeersQueryResult = ApolloReactCommon.QueryResult<
  GetVolunteeersQuery,
  GetVolunteeersQueryVariables
>;
export const GetEventsDocument = gql`
  query getEvents {
    events {
      ...eventAllFields
    }
  }
  ${EventAllFieldsFragmentDoc}
`;
export type GetEventsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetEventsQuery, GetEventsQueryVariables>,
  "query"
>;

export const GetEventsComponent = (props: GetEventsComponentProps) => (
  <ApolloReactComponents.Query<GetEventsQuery, GetEventsQueryVariables> query={GetEventsDocument} {...props} />
);

export type GetEventsProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetEventsQuery, GetEventsQueryVariables>;
} & TChildProps;
export function withGetEvents<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetEventsQuery,
    GetEventsQueryVariables,
    GetEventsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetEventsQuery,
    GetEventsQueryVariables,
    GetEventsProps<TChildProps, TDataName>
  >(GetEventsDocument, {
    alias: "getEvents",
    ...operationOptions,
  });
}
export type GetEventsQueryResult = ApolloReactCommon.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const FindEventDocument = gql`
  query findEvent($id: String!) {
    event(id: $id) {
      ...eventAllFields
    }
  }
  ${EventAllFieldsFragmentDoc}
`;
export type FindEventComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<FindEventQuery, FindEventQueryVariables>,
  "query"
> &
  ({ variables: FindEventQueryVariables; skip?: boolean } | { skip: boolean });

export const FindEventComponent = (props: FindEventComponentProps) => (
  <ApolloReactComponents.Query<FindEventQuery, FindEventQueryVariables> query={FindEventDocument} {...props} />
);

export type FindEventProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FindEventQuery, FindEventQueryVariables>;
} & TChildProps;
export function withFindEvent<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindEventQuery,
    FindEventQueryVariables,
    FindEventProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindEventQuery,
    FindEventQueryVariables,
    FindEventProps<TChildProps, TDataName>
  >(FindEventDocument, {
    alias: "findEvent",
    ...operationOptions,
  });
}
export type FindEventQueryResult = ApolloReactCommon.QueryResult<FindEventQuery, FindEventQueryVariables>;
export const EditEventDocument = gql`
  mutation editEvent($input: UpdateEventInput!) {
    updateEvent(updateEventInput: $input) {
      ...eventAllFields
    }
  }
  ${EventAllFieldsFragmentDoc}
`;
export type EditEventMutationFn = ApolloReactCommon.MutationFunction<EditEventMutation, EditEventMutationVariables>;
export type EditEventComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<EditEventMutation, EditEventMutationVariables>,
  "mutation"
>;

export const EditEventComponent = (props: EditEventComponentProps) => (
  <ApolloReactComponents.Mutation<EditEventMutation, EditEventMutationVariables>
    mutation={EditEventDocument}
    {...props}
  />
);

export type EditEventProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<EditEventMutation, EditEventMutationVariables>;
} & TChildProps;
export function withEditEvent<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EditEventMutation,
    EditEventMutationVariables,
    EditEventProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EditEventMutation,
    EditEventMutationVariables,
    EditEventProps<TChildProps, TDataName>
  >(EditEventDocument, {
    alias: "editEvent",
    ...operationOptions,
  });
}
export type EditEventMutationResult = ApolloReactCommon.MutationResult<EditEventMutation>;
export type EditEventMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditEventMutation,
  EditEventMutationVariables
>;
export const CreateEventDocument = gql`
  mutation createEvent($input: CreateEventInput!) {
    createEvent(createEventInput: $input) {
      ...eventAllFields
    }
  }
  ${EventAllFieldsFragmentDoc}
`;
export type CreateEventMutationFn = ApolloReactCommon.MutationFunction<
  CreateEventMutation,
  CreateEventMutationVariables
>;
export type CreateEventComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<CreateEventMutation, CreateEventMutationVariables>,
  "mutation"
>;

export const CreateEventComponent = (props: CreateEventComponentProps) => (
  <ApolloReactComponents.Mutation<CreateEventMutation, CreateEventMutationVariables>
    mutation={CreateEventDocument}
    {...props}
  />
);

export type CreateEventProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;
} & TChildProps;
export function withCreateEvent<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateEventMutation,
    CreateEventMutationVariables,
    CreateEventProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateEventMutation,
    CreateEventMutationVariables,
    CreateEventProps<TChildProps, TDataName>
  >(CreateEventDocument, {
    alias: "createEvent",
    ...operationOptions,
  });
}
export type CreateEventMutationResult = ApolloReactCommon.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateEventMutation,
  CreateEventMutationVariables
>;
export const RemoveEventDocument = gql`
  mutation removeEvent($id: String!) {
    removeEvent(id: $id) {
      ...eventAllFields
    }
  }
  ${EventAllFieldsFragmentDoc}
`;
export type RemoveEventMutationFn = ApolloReactCommon.MutationFunction<
  RemoveEventMutation,
  RemoveEventMutationVariables
>;
export type RemoveEventComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<RemoveEventMutation, RemoveEventMutationVariables>,
  "mutation"
>;

export const RemoveEventComponent = (props: RemoveEventComponentProps) => (
  <ApolloReactComponents.Mutation<RemoveEventMutation, RemoveEventMutationVariables>
    mutation={RemoveEventDocument}
    {...props}
  />
);

export type RemoveEventProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<RemoveEventMutation, RemoveEventMutationVariables>;
} & TChildProps;
export function withRemoveEvent<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RemoveEventMutation,
    RemoveEventMutationVariables,
    RemoveEventProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RemoveEventMutation,
    RemoveEventMutationVariables,
    RemoveEventProps<TChildProps, TDataName>
  >(RemoveEventDocument, {
    alias: "removeEvent",
    ...operationOptions,
  });
}
export type RemoveEventMutationResult = ApolloReactCommon.MutationResult<RemoveEventMutation>;
export type RemoveEventMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveEventMutation,
  RemoveEventMutationVariables
>;
export const GetGuardsDocument = gql`
  query getGuards {
    guards {
      ...guardAllFields
    }
  }
  ${GuardAllFieldsFragmentDoc}
`;
export type GetGuardsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetGuardsQuery, GetGuardsQueryVariables>,
  "query"
>;

export const GetGuardsComponent = (props: GetGuardsComponentProps) => (
  <ApolloReactComponents.Query<GetGuardsQuery, GetGuardsQueryVariables> query={GetGuardsDocument} {...props} />
);

export type GetGuardsProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetGuardsQuery, GetGuardsQueryVariables>;
} & TChildProps;
export function withGetGuards<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetGuardsQuery,
    GetGuardsQueryVariables,
    GetGuardsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetGuardsQuery,
    GetGuardsQueryVariables,
    GetGuardsProps<TChildProps, TDataName>
  >(GetGuardsDocument, {
    alias: "getGuards",
    ...operationOptions,
  });
}
export type GetGuardsQueryResult = ApolloReactCommon.QueryResult<GetGuardsQuery, GetGuardsQueryVariables>;
export const FindGuardDocument = gql`
  query findGuard($id: String!) {
    guard(id: $id) {
      ...guardAllFields
    }
  }
  ${GuardAllFieldsFragmentDoc}
`;
export type FindGuardComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<FindGuardQuery, FindGuardQueryVariables>,
  "query"
> &
  ({ variables: FindGuardQueryVariables; skip?: boolean } | { skip: boolean });

export const FindGuardComponent = (props: FindGuardComponentProps) => (
  <ApolloReactComponents.Query<FindGuardQuery, FindGuardQueryVariables> query={FindGuardDocument} {...props} />
);

export type FindGuardProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FindGuardQuery, FindGuardQueryVariables>;
} & TChildProps;
export function withFindGuard<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindGuardQuery,
    FindGuardQueryVariables,
    FindGuardProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindGuardQuery,
    FindGuardQueryVariables,
    FindGuardProps<TChildProps, TDataName>
  >(FindGuardDocument, {
    alias: "findGuard",
    ...operationOptions,
  });
}
export type FindGuardQueryResult = ApolloReactCommon.QueryResult<FindGuardQuery, FindGuardQueryVariables>;
export const EditGuardDocument = gql`
  mutation editGuard($input: UpdateGuardInput!) {
    updateGuard(updateGuardInput: $input) {
      ...guardAllFields
    }
  }
  ${GuardAllFieldsFragmentDoc}
`;
export type EditGuardMutationFn = ApolloReactCommon.MutationFunction<EditGuardMutation, EditGuardMutationVariables>;
export type EditGuardComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<EditGuardMutation, EditGuardMutationVariables>,
  "mutation"
>;

export const EditGuardComponent = (props: EditGuardComponentProps) => (
  <ApolloReactComponents.Mutation<EditGuardMutation, EditGuardMutationVariables>
    mutation={EditGuardDocument}
    {...props}
  />
);

export type EditGuardProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<EditGuardMutation, EditGuardMutationVariables>;
} & TChildProps;
export function withEditGuard<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EditGuardMutation,
    EditGuardMutationVariables,
    EditGuardProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EditGuardMutation,
    EditGuardMutationVariables,
    EditGuardProps<TChildProps, TDataName>
  >(EditGuardDocument, {
    alias: "editGuard",
    ...operationOptions,
  });
}
export type EditGuardMutationResult = ApolloReactCommon.MutationResult<EditGuardMutation>;
export type EditGuardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditGuardMutation,
  EditGuardMutationVariables
>;
export const CreateGuardDocument = gql`
  mutation createGuard($input: CreateGuardInput!) {
    createGuard(createGuardInput: $input) {
      ...guardAllFields
    }
  }
  ${GuardAllFieldsFragmentDoc}
`;
export type CreateGuardMutationFn = ApolloReactCommon.MutationFunction<
  CreateGuardMutation,
  CreateGuardMutationVariables
>;
export type CreateGuardComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<CreateGuardMutation, CreateGuardMutationVariables>,
  "mutation"
>;

export const CreateGuardComponent = (props: CreateGuardComponentProps) => (
  <ApolloReactComponents.Mutation<CreateGuardMutation, CreateGuardMutationVariables>
    mutation={CreateGuardDocument}
    {...props}
  />
);

export type CreateGuardProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateGuardMutation, CreateGuardMutationVariables>;
} & TChildProps;
export function withCreateGuard<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateGuardMutation,
    CreateGuardMutationVariables,
    CreateGuardProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateGuardMutation,
    CreateGuardMutationVariables,
    CreateGuardProps<TChildProps, TDataName>
  >(CreateGuardDocument, {
    alias: "createGuard",
    ...operationOptions,
  });
}
export type CreateGuardMutationResult = ApolloReactCommon.MutationResult<CreateGuardMutation>;
export type CreateGuardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateGuardMutation,
  CreateGuardMutationVariables
>;
export const RemoveGuardDocument = gql`
  mutation removeGuard($id: String!) {
    removeGuard(id: $id) {
      ...guardAllFields
    }
  }
  ${GuardAllFieldsFragmentDoc}
`;
export type RemoveGuardMutationFn = ApolloReactCommon.MutationFunction<
  RemoveGuardMutation,
  RemoveGuardMutationVariables
>;
export type RemoveGuardComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<RemoveGuardMutation, RemoveGuardMutationVariables>,
  "mutation"
>;

export const RemoveGuardComponent = (props: RemoveGuardComponentProps) => (
  <ApolloReactComponents.Mutation<RemoveGuardMutation, RemoveGuardMutationVariables>
    mutation={RemoveGuardDocument}
    {...props}
  />
);

export type RemoveGuardProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<RemoveGuardMutation, RemoveGuardMutationVariables>;
} & TChildProps;
export function withRemoveGuard<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RemoveGuardMutation,
    RemoveGuardMutationVariables,
    RemoveGuardProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RemoveGuardMutation,
    RemoveGuardMutationVariables,
    RemoveGuardProps<TChildProps, TDataName>
  >(RemoveGuardDocument, {
    alias: "removeGuard",
    ...operationOptions,
  });
}
export type RemoveGuardMutationResult = ApolloReactCommon.MutationResult<RemoveGuardMutation>;
export type RemoveGuardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveGuardMutation,
  RemoveGuardMutationVariables
>;
export const GetTrainingsDocument = gql`
  query getTrainings {
    trainings {
      ...trainingAllFields
    }
  }
  ${TrainingAllFieldsFragmentDoc}
`;
export type GetTrainingsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetTrainingsQuery, GetTrainingsQueryVariables>,
  "query"
>;

export const GetTrainingsComponent = (props: GetTrainingsComponentProps) => (
  <ApolloReactComponents.Query<GetTrainingsQuery, GetTrainingsQueryVariables> query={GetTrainingsDocument} {...props} />
);

export type GetTrainingsProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetTrainingsQuery, GetTrainingsQueryVariables>;
} & TChildProps;
export function withGetTrainings<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetTrainingsQuery,
    GetTrainingsQueryVariables,
    GetTrainingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetTrainingsQuery,
    GetTrainingsQueryVariables,
    GetTrainingsProps<TChildProps, TDataName>
  >(GetTrainingsDocument, {
    alias: "getTrainings",
    ...operationOptions,
  });
}
export type GetTrainingsQueryResult = ApolloReactCommon.QueryResult<GetTrainingsQuery, GetTrainingsQueryVariables>;
export const FindTrainingDocument = gql`
  query findTraining($id: String!) {
    training(id: $id) {
      ...trainingAllFields
    }
  }
  ${TrainingAllFieldsFragmentDoc}
`;
export type FindTrainingComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<FindTrainingQuery, FindTrainingQueryVariables>,
  "query"
> &
  ({ variables: FindTrainingQueryVariables; skip?: boolean } | { skip: boolean });

export const FindTrainingComponent = (props: FindTrainingComponentProps) => (
  <ApolloReactComponents.Query<FindTrainingQuery, FindTrainingQueryVariables> query={FindTrainingDocument} {...props} />
);

export type FindTrainingProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FindTrainingQuery, FindTrainingQueryVariables>;
} & TChildProps;
export function withFindTraining<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindTrainingQuery,
    FindTrainingQueryVariables,
    FindTrainingProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindTrainingQuery,
    FindTrainingQueryVariables,
    FindTrainingProps<TChildProps, TDataName>
  >(FindTrainingDocument, {
    alias: "findTraining",
    ...operationOptions,
  });
}
export type FindTrainingQueryResult = ApolloReactCommon.QueryResult<FindTrainingQuery, FindTrainingQueryVariables>;
export const EditTrainingDocument = gql`
  mutation editTraining($input: UpdateTrainingInput!) {
    updateTraining(updateTrainingInput: $input) {
      ...trainingAllFields
    }
  }
  ${TrainingAllFieldsFragmentDoc}
`;
export type EditTrainingMutationFn = ApolloReactCommon.MutationFunction<
  EditTrainingMutation,
  EditTrainingMutationVariables
>;
export type EditTrainingComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<EditTrainingMutation, EditTrainingMutationVariables>,
  "mutation"
>;

export const EditTrainingComponent = (props: EditTrainingComponentProps) => (
  <ApolloReactComponents.Mutation<EditTrainingMutation, EditTrainingMutationVariables>
    mutation={EditTrainingDocument}
    {...props}
  />
);

export type EditTrainingProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<EditTrainingMutation, EditTrainingMutationVariables>;
} & TChildProps;
export function withEditTraining<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EditTrainingMutation,
    EditTrainingMutationVariables,
    EditTrainingProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EditTrainingMutation,
    EditTrainingMutationVariables,
    EditTrainingProps<TChildProps, TDataName>
  >(EditTrainingDocument, {
    alias: "editTraining",
    ...operationOptions,
  });
}
export type EditTrainingMutationResult = ApolloReactCommon.MutationResult<EditTrainingMutation>;
export type EditTrainingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditTrainingMutation,
  EditTrainingMutationVariables
>;
export const CreateTrainingDocument = gql`
  mutation createTraining($input: CreateTrainingInput!) {
    createTraining(createTrainingInput: $input) {
      ...trainingAllFields
    }
  }
  ${TrainingAllFieldsFragmentDoc}
`;
export type CreateTrainingMutationFn = ApolloReactCommon.MutationFunction<
  CreateTrainingMutation,
  CreateTrainingMutationVariables
>;
export type CreateTrainingComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<CreateTrainingMutation, CreateTrainingMutationVariables>,
  "mutation"
>;

export const CreateTrainingComponent = (props: CreateTrainingComponentProps) => (
  <ApolloReactComponents.Mutation<CreateTrainingMutation, CreateTrainingMutationVariables>
    mutation={CreateTrainingDocument}
    {...props}
  />
);

export type CreateTrainingProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateTrainingMutation, CreateTrainingMutationVariables>;
} & TChildProps;
export function withCreateTraining<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateTrainingMutation,
    CreateTrainingMutationVariables,
    CreateTrainingProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateTrainingMutation,
    CreateTrainingMutationVariables,
    CreateTrainingProps<TChildProps, TDataName>
  >(CreateTrainingDocument, {
    alias: "createTraining",
    ...operationOptions,
  });
}
export type CreateTrainingMutationResult = ApolloReactCommon.MutationResult<CreateTrainingMutation>;
export type CreateTrainingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateTrainingMutation,
  CreateTrainingMutationVariables
>;
export const RemoveTrainingDocument = gql`
  mutation removeTraining($id: String!) {
    removeTraining(id: $id) {
      ...trainingAllFields
    }
  }
  ${TrainingAllFieldsFragmentDoc}
`;
export type RemoveTrainingMutationFn = ApolloReactCommon.MutationFunction<
  RemoveTrainingMutation,
  RemoveTrainingMutationVariables
>;
export type RemoveTrainingComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<RemoveTrainingMutation, RemoveTrainingMutationVariables>,
  "mutation"
>;

export const RemoveTrainingComponent = (props: RemoveTrainingComponentProps) => (
  <ApolloReactComponents.Mutation<RemoveTrainingMutation, RemoveTrainingMutationVariables>
    mutation={RemoveTrainingDocument}
    {...props}
  />
);

export type RemoveTrainingProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<RemoveTrainingMutation, RemoveTrainingMutationVariables>;
} & TChildProps;
export function withRemoveTraining<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RemoveTrainingMutation,
    RemoveTrainingMutationVariables,
    RemoveTrainingProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RemoveTrainingMutation,
    RemoveTrainingMutationVariables,
    RemoveTrainingProps<TChildProps, TDataName>
  >(RemoveTrainingDocument, {
    alias: "removeTraining",
    ...operationOptions,
  });
}
export type RemoveTrainingMutationResult = ApolloReactCommon.MutationResult<RemoveTrainingMutation>;
export type RemoveTrainingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveTrainingMutation,
  RemoveTrainingMutationVariables
>;
export const GetDutiesDocument = gql`
  query getDuties {
    duties {
      ...dutyAllFields
    }
  }
  ${DutyAllFieldsFragmentDoc}
`;
export type GetDutiesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetDutiesQuery, GetDutiesQueryVariables>,
  "query"
>;

export const GetDutiesComponent = (props: GetDutiesComponentProps) => (
  <ApolloReactComponents.Query<GetDutiesQuery, GetDutiesQueryVariables> query={GetDutiesDocument} {...props} />
);

export type GetDutiesProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetDutiesQuery, GetDutiesQueryVariables>;
} & TChildProps;
export function withGetDuties<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetDutiesQuery,
    GetDutiesQueryVariables,
    GetDutiesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetDutiesQuery,
    GetDutiesQueryVariables,
    GetDutiesProps<TChildProps, TDataName>
  >(GetDutiesDocument, {
    alias: "getDuties",
    ...operationOptions,
  });
}
export type GetDutiesQueryResult = ApolloReactCommon.QueryResult<GetDutiesQuery, GetDutiesQueryVariables>;
export const FindDutyDocument = gql`
  query findDuty($id: String!) {
    duty(id: $id) {
      ...dutyAllFields
    }
  }
  ${DutyAllFieldsFragmentDoc}
`;
export type FindDutyComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<FindDutyQuery, FindDutyQueryVariables>,
  "query"
> &
  ({ variables: FindDutyQueryVariables; skip?: boolean } | { skip: boolean });

export const FindDutyComponent = (props: FindDutyComponentProps) => (
  <ApolloReactComponents.Query<FindDutyQuery, FindDutyQueryVariables> query={FindDutyDocument} {...props} />
);

export type FindDutyProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FindDutyQuery, FindDutyQueryVariables>;
} & TChildProps;
export function withFindDuty<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindDutyQuery,
    FindDutyQueryVariables,
    FindDutyProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, FindDutyQuery, FindDutyQueryVariables, FindDutyProps<TChildProps, TDataName>>(
    FindDutyDocument,
    {
      alias: "findDuty",
      ...operationOptions,
    }
  );
}
export type FindDutyQueryResult = ApolloReactCommon.QueryResult<FindDutyQuery, FindDutyQueryVariables>;
export const EditDutyDocument = gql`
  mutation editDuty($id: String!, $name: String!, $isDeletable: Boolean, $description: String) {
    updateDuty(updateDutyInput: { id: $id, name: $name, description: $description }) {
      ...dutyAllFields
    }
  }
  ${DutyAllFieldsFragmentDoc}
`;
export type EditDutyMutationFn = ApolloReactCommon.MutationFunction<EditDutyMutation, EditDutyMutationVariables>;
export type EditDutyComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<EditDutyMutation, EditDutyMutationVariables>,
  "mutation"
>;

export const EditDutyComponent = (props: EditDutyComponentProps) => (
  <ApolloReactComponents.Mutation<EditDutyMutation, EditDutyMutationVariables> mutation={EditDutyDocument} {...props} />
);

export type EditDutyProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<EditDutyMutation, EditDutyMutationVariables>;
} & TChildProps;
export function withEditDuty<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EditDutyMutation,
    EditDutyMutationVariables,
    EditDutyProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EditDutyMutation,
    EditDutyMutationVariables,
    EditDutyProps<TChildProps, TDataName>
  >(EditDutyDocument, {
    alias: "editDuty",
    ...operationOptions,
  });
}
export type EditDutyMutationResult = ApolloReactCommon.MutationResult<EditDutyMutation>;
export type EditDutyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditDutyMutation,
  EditDutyMutationVariables
>;
export const CreateDutyDocument = gql`
  mutation createDuty($input: CreateDutyInput!) {
    createDuty(createDutyInput: $input) {
      ...dutyAllFields
    }
  }
  ${DutyAllFieldsFragmentDoc}
`;
export type CreateDutyMutationFn = ApolloReactCommon.MutationFunction<CreateDutyMutation, CreateDutyMutationVariables>;
export type CreateDutyComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<CreateDutyMutation, CreateDutyMutationVariables>,
  "mutation"
>;

export const CreateDutyComponent = (props: CreateDutyComponentProps) => (
  <ApolloReactComponents.Mutation<CreateDutyMutation, CreateDutyMutationVariables>
    mutation={CreateDutyDocument}
    {...props}
  />
);

export type CreateDutyProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateDutyMutation, CreateDutyMutationVariables>;
} & TChildProps;
export function withCreateDuty<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateDutyMutation,
    CreateDutyMutationVariables,
    CreateDutyProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateDutyMutation,
    CreateDutyMutationVariables,
    CreateDutyProps<TChildProps, TDataName>
  >(CreateDutyDocument, {
    alias: "createDuty",
    ...operationOptions,
  });
}
export type CreateDutyMutationResult = ApolloReactCommon.MutationResult<CreateDutyMutation>;
export type CreateDutyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateDutyMutation,
  CreateDutyMutationVariables
>;
export const DeleteDutyDocument = gql`
  mutation deleteDuty($id: String!) {
    removeDuty(id: $id) {
      id
    }
  }
`;
export type DeleteDutyMutationFn = ApolloReactCommon.MutationFunction<DeleteDutyMutation, DeleteDutyMutationVariables>;
export type DeleteDutyComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteDutyMutation, DeleteDutyMutationVariables>,
  "mutation"
>;

export const DeleteDutyComponent = (props: DeleteDutyComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteDutyMutation, DeleteDutyMutationVariables>
    mutation={DeleteDutyDocument}
    {...props}
  />
);

export type DeleteDutyProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteDutyMutation, DeleteDutyMutationVariables>;
} & TChildProps;
export function withDeleteDuty<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteDutyMutation,
    DeleteDutyMutationVariables,
    DeleteDutyProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteDutyMutation,
    DeleteDutyMutationVariables,
    DeleteDutyProps<TChildProps, TDataName>
  >(DeleteDutyDocument, {
    alias: "deleteDuty",
    ...operationOptions,
  });
}
export type DeleteDutyMutationResult = ApolloReactCommon.MutationResult<DeleteDutyMutation>;
export type DeleteDutyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteDutyMutation,
  DeleteDutyMutationVariables
>;
export const GetFireCausesDocument = gql`
  query getFireCauses {
    fireCauses {
      ...fireCauseAllFields
    }
  }
  ${FireCauseAllFieldsFragmentDoc}
`;
export type GetFireCausesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetFireCausesQuery, GetFireCausesQueryVariables>,
  "query"
>;

export const GetFireCausesComponent = (props: GetFireCausesComponentProps) => (
  <ApolloReactComponents.Query<GetFireCausesQuery, GetFireCausesQueryVariables>
    query={GetFireCausesDocument}
    {...props}
  />
);

export type GetFireCausesProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetFireCausesQuery, GetFireCausesQueryVariables>;
} & TChildProps;
export function withGetFireCauses<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFireCausesQuery,
    GetFireCausesQueryVariables,
    GetFireCausesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFireCausesQuery,
    GetFireCausesQueryVariables,
    GetFireCausesProps<TChildProps, TDataName>
  >(GetFireCausesDocument, {
    alias: "getFireCauses",
    ...operationOptions,
  });
}
export type GetFireCausesQueryResult = ApolloReactCommon.QueryResult<GetFireCausesQuery, GetFireCausesQueryVariables>;
export const GetFireClassesDocument = gql`
  query getFireClasses {
    fireClasses {
      ...fireClassAllFields
    }
  }
  ${FireClassAllFieldsFragmentDoc}
`;
export type GetFireClassesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetFireClassesQuery, GetFireClassesQueryVariables>,
  "query"
>;

export const GetFireClassesComponent = (props: GetFireClassesComponentProps) => (
  <ApolloReactComponents.Query<GetFireClassesQuery, GetFireClassesQueryVariables>
    query={GetFireClassesDocument}
    {...props}
  />
);

export type GetFireClassesProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetFireClassesQuery, GetFireClassesQueryVariables>;
} & TChildProps;
export function withGetFireClasses<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFireClassesQuery,
    GetFireClassesQueryVariables,
    GetFireClassesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFireClassesQuery,
    GetFireClassesQueryVariables,
    GetFireClassesProps<TChildProps, TDataName>
  >(GetFireClassesDocument, {
    alias: "getFireClasses",
    ...operationOptions,
  });
}
export type GetFireClassesQueryResult = ApolloReactCommon.QueryResult<
  GetFireClassesQuery,
  GetFireClassesQueryVariables
>;
export const GetFireTypesDocument = gql`
  query getFireTypes {
    fireTypes {
      ...fireTypeAllFields
    }
  }
  ${FireTypeAllFieldsFragmentDoc}
`;
export type GetFireTypesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetFireTypesQuery, GetFireTypesQueryVariables>,
  "query"
>;

export const GetFireTypesComponent = (props: GetFireTypesComponentProps) => (
  <ApolloReactComponents.Query<GetFireTypesQuery, GetFireTypesQueryVariables> query={GetFireTypesDocument} {...props} />
);

export type GetFireTypesProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetFireTypesQuery, GetFireTypesQueryVariables>;
} & TChildProps;
export function withGetFireTypes<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetFireTypesQuery,
    GetFireTypesQueryVariables,
    GetFireTypesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetFireTypesQuery,
    GetFireTypesQueryVariables,
    GetFireTypesProps<TChildProps, TDataName>
  >(GetFireTypesDocument, {
    alias: "getFireTypes",
    ...operationOptions,
  });
}
export type GetFireTypesQueryResult = ApolloReactCommon.QueryResult<GetFireTypesQuery, GetFireTypesQueryVariables>;
export const GetRanksDocument = gql`
  query getRanks {
    ranks {
      ...rankAllFields
    }
  }
  ${RankAllFieldsFragmentDoc}
`;
export type GetRanksComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetRanksQuery, GetRanksQueryVariables>,
  "query"
>;

export const GetRanksComponent = (props: GetRanksComponentProps) => (
  <ApolloReactComponents.Query<GetRanksQuery, GetRanksQueryVariables> query={GetRanksDocument} {...props} />
);

export type GetRanksProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetRanksQuery, GetRanksQueryVariables>;
} & TChildProps;
export function withGetRanks<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetRanksQuery,
    GetRanksQueryVariables,
    GetRanksProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, GetRanksQuery, GetRanksQueryVariables, GetRanksProps<TChildProps, TDataName>>(
    GetRanksDocument,
    {
      alias: "getRanks",
      ...operationOptions,
    }
  );
}
export type GetRanksQueryResult = ApolloReactCommon.QueryResult<GetRanksQuery, GetRanksQueryVariables>;
export const FindRankDocument = gql`
  query findRank($id: String!) {
    rank(id: $id) {
      ...rankAllFields
    }
  }
  ${RankAllFieldsFragmentDoc}
`;
export type FindRankComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<FindRankQuery, FindRankQueryVariables>,
  "query"
> &
  ({ variables: FindRankQueryVariables; skip?: boolean } | { skip: boolean });

export const FindRankComponent = (props: FindRankComponentProps) => (
  <ApolloReactComponents.Query<FindRankQuery, FindRankQueryVariables> query={FindRankDocument} {...props} />
);

export type FindRankProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FindRankQuery, FindRankQueryVariables>;
} & TChildProps;
export function withFindRank<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindRankQuery,
    FindRankQueryVariables,
    FindRankProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, FindRankQuery, FindRankQueryVariables, FindRankProps<TChildProps, TDataName>>(
    FindRankDocument,
    {
      alias: "findRank",
      ...operationOptions,
    }
  );
}
export type FindRankQueryResult = ApolloReactCommon.QueryResult<FindRankQuery, FindRankQueryVariables>;
export const EditRankDocument = gql`
  mutation editRank($id: String!, $name: String!, $isDeletable: Boolean, $description: String) {
    updateRank(updateRankInput: { id: $id, name: $name, description: $description }) {
      ...rankAllFields
    }
  }
  ${RankAllFieldsFragmentDoc}
`;
export type EditRankMutationFn = ApolloReactCommon.MutationFunction<EditRankMutation, EditRankMutationVariables>;
export type EditRankComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<EditRankMutation, EditRankMutationVariables>,
  "mutation"
>;

export const EditRankComponent = (props: EditRankComponentProps) => (
  <ApolloReactComponents.Mutation<EditRankMutation, EditRankMutationVariables> mutation={EditRankDocument} {...props} />
);

export type EditRankProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<EditRankMutation, EditRankMutationVariables>;
} & TChildProps;
export function withEditRank<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EditRankMutation,
    EditRankMutationVariables,
    EditRankProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EditRankMutation,
    EditRankMutationVariables,
    EditRankProps<TChildProps, TDataName>
  >(EditRankDocument, {
    alias: "editRank",
    ...operationOptions,
  });
}
export type EditRankMutationResult = ApolloReactCommon.MutationResult<EditRankMutation>;
export type EditRankMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditRankMutation,
  EditRankMutationVariables
>;
export const CreateRankDocument = gql`
  mutation createRank($input: CreateRankInput!) {
    createRank(createRankInput: $input) {
      ...rankAllFields
    }
  }
  ${RankAllFieldsFragmentDoc}
`;
export type CreateRankMutationFn = ApolloReactCommon.MutationFunction<CreateRankMutation, CreateRankMutationVariables>;
export type CreateRankComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<CreateRankMutation, CreateRankMutationVariables>,
  "mutation"
>;

export const CreateRankComponent = (props: CreateRankComponentProps) => (
  <ApolloReactComponents.Mutation<CreateRankMutation, CreateRankMutationVariables>
    mutation={CreateRankDocument}
    {...props}
  />
);

export type CreateRankProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateRankMutation, CreateRankMutationVariables>;
} & TChildProps;
export function withCreateRank<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateRankMutation,
    CreateRankMutationVariables,
    CreateRankProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateRankMutation,
    CreateRankMutationVariables,
    CreateRankProps<TChildProps, TDataName>
  >(CreateRankDocument, {
    alias: "createRank",
    ...operationOptions,
  });
}
export type CreateRankMutationResult = ApolloReactCommon.MutationResult<CreateRankMutation>;
export type CreateRankMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateRankMutation,
  CreateRankMutationVariables
>;
export const DeleteRankDocument = gql`
  mutation deleteRank($id: String!) {
    removeRank(id: $id) {
      id
    }
  }
`;
export type DeleteRankMutationFn = ApolloReactCommon.MutationFunction<DeleteRankMutation, DeleteRankMutationVariables>;
export type DeleteRankComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteRankMutation, DeleteRankMutationVariables>,
  "mutation"
>;

export const DeleteRankComponent = (props: DeleteRankComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteRankMutation, DeleteRankMutationVariables>
    mutation={DeleteRankDocument}
    {...props}
  />
);

export type DeleteRankProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteRankMutation, DeleteRankMutationVariables>;
} & TChildProps;
export function withDeleteRank<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteRankMutation,
    DeleteRankMutationVariables,
    DeleteRankProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteRankMutation,
    DeleteRankMutationVariables,
    DeleteRankProps<TChildProps, TDataName>
  >(DeleteRankDocument, {
    alias: "deleteRank",
    ...operationOptions,
  });
}
export type DeleteRankMutationResult = ApolloReactCommon.MutationResult<DeleteRankMutation>;
export type DeleteRankMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteRankMutation,
  DeleteRankMutationVariables
>;
export const GetServicesDocument = gql`
  query getServices {
    services {
      ...servicesAllFields
    }
  }
  ${ServicesAllFieldsFragmentDoc}
`;
export type GetServicesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetServicesQuery, GetServicesQueryVariables>,
  "query"
>;

export const GetServicesComponent = (props: GetServicesComponentProps) => (
  <ApolloReactComponents.Query<GetServicesQuery, GetServicesQueryVariables> query={GetServicesDocument} {...props} />
);

export type GetServicesProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetServicesQuery, GetServicesQueryVariables>;
} & TChildProps;
export function withGetServices<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetServicesQuery,
    GetServicesQueryVariables,
    GetServicesProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetServicesQuery,
    GetServicesQueryVariables,
    GetServicesProps<TChildProps, TDataName>
  >(GetServicesDocument, {
    alias: "getServices",
    ...operationOptions,
  });
}
export type GetServicesQueryResult = ApolloReactCommon.QueryResult<GetServicesQuery, GetServicesQueryVariables>;
export const FindServiceDocument = gql`
  query findService($id: String!) {
    service(id: $id) {
      ...servicesAllFields
    }
  }
  ${ServicesAllFieldsFragmentDoc}
`;
export type FindServiceComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<FindServiceQuery, FindServiceQueryVariables>,
  "query"
> &
  ({ variables: FindServiceQueryVariables; skip?: boolean } | { skip: boolean });

export const FindServiceComponent = (props: FindServiceComponentProps) => (
  <ApolloReactComponents.Query<FindServiceQuery, FindServiceQueryVariables> query={FindServiceDocument} {...props} />
);

export type FindServiceProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FindServiceQuery, FindServiceQueryVariables>;
} & TChildProps;
export function withFindService<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindServiceQuery,
    FindServiceQueryVariables,
    FindServiceProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindServiceQuery,
    FindServiceQueryVariables,
    FindServiceProps<TChildProps, TDataName>
  >(FindServiceDocument, {
    alias: "findService",
    ...operationOptions,
  });
}
export type FindServiceQueryResult = ApolloReactCommon.QueryResult<FindServiceQuery, FindServiceQueryVariables>;
export const EditServiceDocument = gql`
  mutation editService($input: UpdateServiceInput!) {
    updateService(updateServiceInput: $input) {
      ...servicesAllFields
    }
  }
  ${ServicesAllFieldsFragmentDoc}
`;
export type EditServiceMutationFn = ApolloReactCommon.MutationFunction<
  EditServiceMutation,
  EditServiceMutationVariables
>;
export type EditServiceComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<EditServiceMutation, EditServiceMutationVariables>,
  "mutation"
>;

export const EditServiceComponent = (props: EditServiceComponentProps) => (
  <ApolloReactComponents.Mutation<EditServiceMutation, EditServiceMutationVariables>
    mutation={EditServiceDocument}
    {...props}
  />
);

export type EditServiceProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<EditServiceMutation, EditServiceMutationVariables>;
} & TChildProps;
export function withEditService<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EditServiceMutation,
    EditServiceMutationVariables,
    EditServiceProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EditServiceMutation,
    EditServiceMutationVariables,
    EditServiceProps<TChildProps, TDataName>
  >(EditServiceDocument, {
    alias: "editService",
    ...operationOptions,
  });
}
export type EditServiceMutationResult = ApolloReactCommon.MutationResult<EditServiceMutation>;
export type EditServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditServiceMutation,
  EditServiceMutationVariables
>;
export const CreateServiceDocument = gql`
  mutation createService($input: CreateServiceInput!) {
    createService(createServiceInput: $input) {
      ...servicesAllFields
    }
  }
  ${ServicesAllFieldsFragmentDoc}
`;
export type CreateServiceMutationFn = ApolloReactCommon.MutationFunction<
  CreateServiceMutation,
  CreateServiceMutationVariables
>;
export type CreateServiceComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<CreateServiceMutation, CreateServiceMutationVariables>,
  "mutation"
>;

export const CreateServiceComponent = (props: CreateServiceComponentProps) => (
  <ApolloReactComponents.Mutation<CreateServiceMutation, CreateServiceMutationVariables>
    mutation={CreateServiceDocument}
    {...props}
  />
);

export type CreateServiceProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateServiceMutation, CreateServiceMutationVariables>;
} & TChildProps;
export function withCreateService<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateServiceMutation,
    CreateServiceMutationVariables,
    CreateServiceProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateServiceMutation,
    CreateServiceMutationVariables,
    CreateServiceProps<TChildProps, TDataName>
  >(CreateServiceDocument, {
    alias: "createService",
    ...operationOptions,
  });
}
export type CreateServiceMutationResult = ApolloReactCommon.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateServiceMutation,
  CreateServiceMutationVariables
>;
export const RemoveServiceDocument = gql`
  mutation removeService($id: String!) {
    removeService(id: $id) {
      ...servicesAllFields
    }
  }
  ${ServicesAllFieldsFragmentDoc}
`;
export type RemoveServiceMutationFn = ApolloReactCommon.MutationFunction<
  RemoveServiceMutation,
  RemoveServiceMutationVariables
>;
export type RemoveServiceComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<RemoveServiceMutation, RemoveServiceMutationVariables>,
  "mutation"
>;

export const RemoveServiceComponent = (props: RemoveServiceComponentProps) => (
  <ApolloReactComponents.Mutation<RemoveServiceMutation, RemoveServiceMutationVariables>
    mutation={RemoveServiceDocument}
    {...props}
  />
);

export type RemoveServiceProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<RemoveServiceMutation, RemoveServiceMutationVariables>;
} & TChildProps;
export function withRemoveService<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RemoveServiceMutation,
    RemoveServiceMutationVariables,
    RemoveServiceProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    RemoveServiceMutation,
    RemoveServiceMutationVariables,
    RemoveServiceProps<TChildProps, TDataName>
  >(RemoveServiceDocument, {
    alias: "removeService",
    ...operationOptions,
  });
}
export type RemoveServiceMutationResult = ApolloReactCommon.MutationResult<RemoveServiceMutation>;
export type RemoveServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveServiceMutation,
  RemoveServiceMutationVariables
>;
export const GetVolunteersDocument = gql`
  query getVolunteers {
    volunteers {
      ...volunteerAllFields
    }
  }
  ${VolunteerAllFieldsFragmentDoc}
`;
export type GetVolunteersComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GetVolunteersQuery, GetVolunteersQueryVariables>,
  "query"
>;

export const GetVolunteersComponent = (props: GetVolunteersComponentProps) => (
  <ApolloReactComponents.Query<GetVolunteersQuery, GetVolunteersQueryVariables>
    query={GetVolunteersDocument}
    {...props}
  />
);

export type GetVolunteersProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetVolunteersQuery, GetVolunteersQueryVariables>;
} & TChildProps;
export function withGetVolunteers<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetVolunteersQuery,
    GetVolunteersQueryVariables,
    GetVolunteersProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetVolunteersQuery,
    GetVolunteersQueryVariables,
    GetVolunteersProps<TChildProps, TDataName>
  >(GetVolunteersDocument, {
    alias: "getVolunteers",
    ...operationOptions,
  });
}
export type GetVolunteersQueryResult = ApolloReactCommon.QueryResult<GetVolunteersQuery, GetVolunteersQueryVariables>;
export const FindVolunteerDocument = gql`
  query findVolunteer($id: String!) {
    volunteer(id: $id) {
      ...volunteerAllFields
    }
  }
  ${VolunteerAllFieldsFragmentDoc}
`;
export type FindVolunteerComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<FindVolunteerQuery, FindVolunteerQueryVariables>,
  "query"
> &
  ({ variables: FindVolunteerQueryVariables; skip?: boolean } | { skip: boolean });

export const FindVolunteerComponent = (props: FindVolunteerComponentProps) => (
  <ApolloReactComponents.Query<FindVolunteerQuery, FindVolunteerQueryVariables>
    query={FindVolunteerDocument}
    {...props}
  />
);

export type FindVolunteerProps<TChildProps = {}, TDataName extends string = "data"> = {
  [key in TDataName]: ApolloReactHoc.DataValue<FindVolunteerQuery, FindVolunteerQueryVariables>;
} & TChildProps;
export function withFindVolunteer<TProps, TChildProps = {}, TDataName extends string = "data">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    FindVolunteerQuery,
    FindVolunteerQueryVariables,
    FindVolunteerProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    FindVolunteerQuery,
    FindVolunteerQueryVariables,
    FindVolunteerProps<TChildProps, TDataName>
  >(FindVolunteerDocument, {
    alias: "findVolunteer",
    ...operationOptions,
  });
}
export type FindVolunteerQueryResult = ApolloReactCommon.QueryResult<FindVolunteerQuery, FindVolunteerQueryVariables>;
export const EditVolunteerDocument = gql`
  mutation editVolunteer($input: UpdateVolunteerInput!) {
    updateVolunteer(updateVolunteerInput: $input) {
      ...volunteerAllFields
    }
  }
  ${VolunteerAllFieldsFragmentDoc}
`;
export type EditVolunteerMutationFn = ApolloReactCommon.MutationFunction<
  EditVolunteerMutation,
  EditVolunteerMutationVariables
>;
export type EditVolunteerComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<EditVolunteerMutation, EditVolunteerMutationVariables>,
  "mutation"
>;

export const EditVolunteerComponent = (props: EditVolunteerComponentProps) => (
  <ApolloReactComponents.Mutation<EditVolunteerMutation, EditVolunteerMutationVariables>
    mutation={EditVolunteerDocument}
    {...props}
  />
);

export type EditVolunteerProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<EditVolunteerMutation, EditVolunteerMutationVariables>;
} & TChildProps;
export function withEditVolunteer<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EditVolunteerMutation,
    EditVolunteerMutationVariables,
    EditVolunteerProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EditVolunteerMutation,
    EditVolunteerMutationVariables,
    EditVolunteerProps<TChildProps, TDataName>
  >(EditVolunteerDocument, {
    alias: "editVolunteer",
    ...operationOptions,
  });
}
export type EditVolunteerMutationResult = ApolloReactCommon.MutationResult<EditVolunteerMutation>;
export type EditVolunteerMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditVolunteerMutation,
  EditVolunteerMutationVariables
>;
export const CreateVolunteerDocument = gql`
  mutation createVolunteer($input: CreateVolunteerInput!) {
    createVolunteer(createVolunteerInput: $input) {
      ...volunteerAllFields
    }
  }
  ${VolunteerAllFieldsFragmentDoc}
`;
export type CreateVolunteerMutationFn = ApolloReactCommon.MutationFunction<
  CreateVolunteerMutation,
  CreateVolunteerMutationVariables
>;
export type CreateVolunteerComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<CreateVolunteerMutation, CreateVolunteerMutationVariables>,
  "mutation"
>;

export const CreateVolunteerComponent = (props: CreateVolunteerComponentProps) => (
  <ApolloReactComponents.Mutation<CreateVolunteerMutation, CreateVolunteerMutationVariables>
    mutation={CreateVolunteerDocument}
    {...props}
  />
);

export type CreateVolunteerProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<CreateVolunteerMutation, CreateVolunteerMutationVariables>;
} & TChildProps;
export function withCreateVolunteer<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateVolunteerMutation,
    CreateVolunteerMutationVariables,
    CreateVolunteerProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateVolunteerMutation,
    CreateVolunteerMutationVariables,
    CreateVolunteerProps<TChildProps, TDataName>
  >(CreateVolunteerDocument, {
    alias: "createVolunteer",
    ...operationOptions,
  });
}
export type CreateVolunteerMutationResult = ApolloReactCommon.MutationResult<CreateVolunteerMutation>;
export type CreateVolunteerMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateVolunteerMutation,
  CreateVolunteerMutationVariables
>;
export const DeleteVolunteerDocument = gql`
  mutation deleteVolunteer($id: String!) {
    removeVolunteer(id: $id) {
      id
    }
  }
`;
export type DeleteVolunteerMutationFn = ApolloReactCommon.MutationFunction<
  DeleteVolunteerMutation,
  DeleteVolunteerMutationVariables
>;
export type DeleteVolunteerComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<DeleteVolunteerMutation, DeleteVolunteerMutationVariables>,
  "mutation"
>;

export const DeleteVolunteerComponent = (props: DeleteVolunteerComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteVolunteerMutation, DeleteVolunteerMutationVariables>
    mutation={DeleteVolunteerDocument}
    {...props}
  />
);

export type DeleteVolunteerProps<TChildProps = {}, TDataName extends string = "mutate"> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteVolunteerMutation, DeleteVolunteerMutationVariables>;
} & TChildProps;
export function withDeleteVolunteer<TProps, TChildProps = {}, TDataName extends string = "mutate">(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteVolunteerMutation,
    DeleteVolunteerMutationVariables,
    DeleteVolunteerProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteVolunteerMutation,
    DeleteVolunteerMutationVariables,
    DeleteVolunteerProps<TChildProps, TDataName>
  >(DeleteVolunteerDocument, {
    alias: "deleteVolunteer",
    ...operationOptions,
  });
}
export type DeleteVolunteerMutationResult = ApolloReactCommon.MutationResult<DeleteVolunteerMutation>;
export type DeleteVolunteerMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteVolunteerMutation,
  DeleteVolunteerMutationVariables
>;
