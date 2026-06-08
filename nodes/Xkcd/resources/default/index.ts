import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Info 0 Json",
					"value": "GET Info 0 Json",
					"action": "GET Info 0 Json",
					"description": "Fetch current comic and metadata.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info.0.json"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /info.0.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Info 0 Json"
					]
				}
			}
		},
];
