// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var hello_pb = require('./hello_pb.js');

function serialize_hello_HelloReply(arg) {
  if (!(arg instanceof hello_pb.HelloReply)) {
    throw new Error('Expected argument of type hello.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloReply(buffer_arg) {
  return hello_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hello_HelloRequest(arg) {
  if (!(arg instanceof hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type hello.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hello_HelloRequest(buffer_arg) {
  return hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/hello.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.HelloRequest,
    responseType: hello_pb.HelloReply,
    requestSerialize: serialize_hello_HelloRequest,
    requestDeserialize: deserialize_hello_HelloRequest,
    responseSerialize: serialize_hello_HelloReply,
    responseDeserialize: deserialize_hello_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
